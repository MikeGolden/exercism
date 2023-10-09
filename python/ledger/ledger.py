# -*- coding: utf-8 -*-

# Function to create an entry with a date (as a list of integers), description, and change
def create_entry(date, description, change):
    return (list(map(int, date.split("-"))), description, change)

# Function to format ledger entries based on currency and locale
def format_entries(currency, locale, entries):
    # Define formatting settings based on currency and locale
    if currency == "USD":
        symbol = "$"
    elif currency == "EUR":
        symbol = u"€"

    if locale == "en_US":
        header = ("Date", "Description", "Change")
        date_fmt = "{1:02}/{2:02}/{0}"
        number_po_fmt = "{}{} "
        number_ne_fmt = "({}{})"
        thousands = ","
        decimal = "."
    elif locale == "nl_NL":
        header = ("Datum", "Omschrijving", "Verandering")
        date_fmt = "{2:02}-{1:02}-{0}"
        number_po_fmt = "{} {} "
        number_ne_fmt = "{} -{} "
        thousands = "."
        decimal = ","

    # Initialize the result list with the formatted header
    ret = ["{:<11}| {:<26}| {:<13}".format(*header)]

    # Iterate through entries, format each entry, and add it to the result list
    for date, description, change in sorted(entries):
        # Format the date
        date = date_fmt.format(*date)

        # Truncate the description if it's longer than 25 characters
        if len(description) > 25:
            description = description[:22] + "... "

        # Format the change amount (with thousands separator and decimal point)
        change_abs = "{:.2f}".format(abs(change) / 100).replace(".", decimal)
        for i in range(len(change_abs) - 6, 0, -3):
            change_abs = change_abs[:i] + thousands + change_abs[i:]
        number_fmt = number_ne_fmt if change < 0 else number_po_fmt
        change = number_fmt.format(symbol, change_abs)

        # Add the formatted entry to the result list
        ret.append("{:<11}| {:<26}| {:>13}".format(date, description, change))

    # Join the formatted entries into a single string and return it
    return "\n".join(ret)
