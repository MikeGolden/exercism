from typing import Union

def measure(bucket_one: int, bucket_two: int, goal: int, start_bucket: str) -> Union[int, str, int]:
    # Create a set to keep track of visited states
    visited = set()
    # Create a queue for BFS
    queue = []

    # Determine the initial state based on the starting bucket
    if start_bucket == "one":
        initial_state = (bucket_one, 0, 1)  # Initial state: (bucket 1, bucket 2, step)
        invalid_state = (0, bucket_two)  # Invalid state where bucket 1 is empty and bucket 2 is full
    else:
        initial_state = (0, bucket_two, 1)  # Initial state: (bucket 1, bucket 2, step)
        invalid_state = (bucket_one, 0)  # Invalid state where bucket 2 is empty and bucket 1 is full

    queue.append(initial_state)

    while queue:
        b1, b2, step = queue.pop(0)

        # Check if the goal is reached in either bucket
        if b1 == goal:
            return step, 'one', b2
        if b2 == goal:
            return step, 'two', b1

        # Check if the current state is visited or invalid
        if (b1, b2) in visited or (b1, b2) == invalid_state:
            continue

        visited.add((b1, b2))

        # Perform possible actions:
        # 1. Pouring one bucket into the other bucket
        queue.append((min(b1 + b2, bucket_one), b2 - (min(b1 + b2, bucket_one) - b1), step + 1))
        queue.append((b1 - (min(b1 + b2, bucket_two) - b2), min(b1 + b2, bucket_two), step + 1))

        # 2. Emptying a bucket and doing nothing to the other
        queue.append((b1, 0, step + 1))
        queue.append((0, b2, step + 1))

        # 3. Filling a bucket and doing nothing to the other
        queue.append((bucket_one, b2, step + 1))
        queue.append((b1, bucket_two, step + 1))

    # If no solution is found, raise a ValueError
    raise ValueError("No Solution Possible")
