import re

def parse(markdown):
    s = markdown  # Assign the input Markdown to variable 's'

    # Replace double underscores with <strong> tags
    s = re.sub(r'__([^\n]+?)__', r'<strong>\1</strong>', s)

    # Replace single underscores with <em> tags
    s = re.sub(r'_([^\n]+?)_', r'<em>\1</em>', s)

    # Replace lines starting with '*' with <li> tags, treating each line as a list item
    s = re.sub(r'^\* (.*?$)', r'<li>\1</li>', s, flags=re.M)

    # Wrap the entire list (group of <li> items) with <ul> tags
    s = re.sub(r'(<li>.*</li>)', r'<ul>\1</ul>', s, flags=re.S)

    # Replace lines starting with '#' (headers) with <h1> to <h6> tags, depending on the number of '#' characters
    for i in range(6, 0, -1):
        s = re.sub(r'^{} (.*?$)'.format('#' * i), r'<h{0}>\1</h{0}>'.format(i), s, flags=re.M)

    # Wrap lines not matching any specific tag patterns with <p> tags
    s = re.sub(r'^(?!<[hlu])(.*?$)', r'<p>\1</p>', s, flags=re.M)

    s = re.sub(r'\n', '', s)  # Remove newline characters

    return s  # Return the parsed HTML
