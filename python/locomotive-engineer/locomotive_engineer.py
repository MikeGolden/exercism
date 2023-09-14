"""Functions which helps the locomotive engineer to keep track of the train."""


def get_list_of_wagons(*args):
    """Return a list of wagons.

    :param: arbitrary number of wagons.
    :return: list - list of wagons.
    """
    return list(args)


def fix_list_of_wagons(each_wagons_id, missing_wagons):
    """Fix the list of wagons.

    :parm each_wagons_id: list - the list of wagons.
    :parm missing_wagons: list - the list of missing wagons.
    :return: list - list of wagons.
    """
    
    # Move the first two wagons to the end of the initial list.
    each_wagons_id.extend(each_wagons_id[:2])
    del each_wagons_id[:2]

    # Find the index of the locomotive ID (1).
    locomotive_index = each_wagons_id.index(1)

    # Insert the values from the insert_list immediately after the locomotive.
    each_wagons_id[locomotive_index + 1:locomotive_index + 1] = missing_wagons

    return each_wagons_id


def add_missing_stops(adict, **kwargs):
    """Add missing stops to route dict.

    :param route: dict - the dict of routing information.
    :param: arbitrary number of stops.
    :return: dict - updated route dictionary.
    """
    adict["stops"] = [x for x in kwargs.values()]
    return adict

def extend_route_information(route, more_route_information):
    """Extend route information with more_route_information.

    :param route: dict - the route information.
    :param more_route_information: dict -  extra route information.
    :return: dict - extended route information.
    """
    return dict(list(route.items()) + list(more_route_information.items()))


def fix_wagon_depot(wagons_rows):
    """Fix the list of rows of wagons.

    :param wagons_rows: list[list[tuple]] - the list of rows of wagons.
    :return: list[list[tuple]] - list of rows of wagons.
    """
    # Create a dictionary to store the wagons by color.
    color_wagons = {}
    
    # Iterate through rows and colors.
    for row in wagons_rows:
        for wagon_id, color in row:
            if color not in color_wagons:
                color_wagons[color] = []
            color_wagons[color].append((wagon_id, color))
    
    # Determine the maximum number of wagons with the same color.
    max_count = max(len(wagons) for wagons in color_wagons.values())
    
    # Create a list to store the rows with correct order of wagons.
    result = [[] for _ in range(max_count)]
    
    # Iterate through colors and distribute wagons.
    for wagons in color_wagons.values():
        for i, (wagon_id, color) in enumerate(wagons):
            result[i].append((wagon_id, color))
    
    return result
