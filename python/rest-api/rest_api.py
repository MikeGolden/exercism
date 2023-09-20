import json

class RestAPI:
    def __init__(self, database=None):
        # Initialize the RestAPI with an optional database.
        self.database = database

    def get(self, url, payload=None):
        # Parse the payload if it's provided, or initialize it with an empty "users" list.
        payload = json.loads(payload) if payload is not None else {"users": []}

        if url == "/users":
            # Filter users from the database based on the names provided in the payload.
            users = [user for user in self.database["users"]
                     if user["name"] in payload["users"]]

            # Return a JSON response containing the sorted list of users by name.
            return json.dumps({"users": sorted(users,
                                               key=lambda user: user["name"])})

    def post(self, url, payload=None):
        # Parse the payload if it's provided, or initialize it with an empty "users" list.
        payload = json.loads(payload) if payload is not None else {"users": []}

        if url == "/add":
            # Add a new user to the database with the given name and initialize their data.
            user = {"name": payload["user"],
                    "owes": {}, "owed_by": {}, "balance": 0.0}
            self.database["users"].append(user)

            # Return the user data as a JSON response.
            return json.dumps(user)
        elif url == "/iou":
            # Extract lender, borrower, and amount from the payload.
            lender = payload["lender"]
            borrower = payload["borrower"]
            amount = payload["amount"]
            users = {"users": []}

            for user in self.database["users"]:
                if user["name"] == lender:
                    # Update the lender's balance and handle debts/credits.
                    user["balance"] += amount
                    remain = amount
                    users["users"].append(user)

                    if borrower in user["owes"]:
                        if user["owes"][borrower] > remain:
                            user["owes"][borrower] -= remain
                            remain = 0
                        elif user["owes"][borrower] <= remain:
                            remain -= user["owes"][borrower]
                            user["owes"].pop(borrower)

                    if remain > 0:
                        if borrower not in user["owed_by"]:
                            user["owed_by"][borrower] = 0
                        user["owed_by"][borrower] += remain
                elif user["name"] == borrower:
                    # Update the borrower's balance and handle debts/credits.
                    user["balance"] -= amount
                    remain = amount
                    users["users"].append(user)

                    if lender in user["owed_by"]:
                        if user["owed_by"][lender] > remain:
                            user["owed_by"][lender] -= remain
                            remain = 0
                        elif user["owed_by"][lender] <= remain:
                            remain -= user["owed_by"][lender]
                            user["owed_by"].pop(lender)

                    if remain > 0:
                        if lender not in user["owes"]:
                            user["owes"][lender] = 0
                        user["owes"][lender] += remain

            # Return the updated user data as a JSON response.
            return json.dumps(users)
