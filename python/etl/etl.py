def transform(legacy_data):
    # Create an empty dictionary to store the transformed data.
    result = {}

    # Iterate through the items (key-value pairs) in the legacy_data dictionary.
    for key, value_lst in legacy_data.items():
        # For each key, iterate through the list of values associated with that key.
        for value in value_lst:
            # Convert the value to lowercase and use it as a key in the result dictionary.
            # Set the key from the legacy_data dictionary as the corresponding value.
            result[value.lower()] = key

    # Return the transformed data as a new dictionary.
    return result