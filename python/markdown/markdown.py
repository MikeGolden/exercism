import re

def parse(markdown):
    start_list = False  # Flag to track if we're inside an unordered list
    lines = [parse_line(line) for line in markdown.splitlines()]  # Split the markdown into lines and parse each line

    # Iterate through the parsed lines to handle list formatting
    for i in range(len(lines)):
        if not start_list and re.match(r'<li>', lines[i]):
            lines[i] = '<ul>' + lines[i]  # Open an unordered list if not already inside one
            start_list = True
        elif start_list and (i == len(lines) - 1 or not re.match(r'<li>', lines[i + 1])):
            lines[i] += '</ul>'  # Close the unordered list if the next line is not part of the list
            start_list = False

    return ''.join(lines)  # Join the parsed lines to form the final HTML content


def parse_line(markdown):
    markdown = emphasis(markdown)  # Apply emphasis (strong and em) formatting to the line

    if is_header(markdown):
        i = markdown.index(' ')
        return '<h{0}>{1}</h{0}>'.format(i, markdown[i + 1:])  # Format as a header
    elif is_unordered_list(markdown):
        return '<li>{}</li>'.format(markdown[2:])  # Format as a list item
    else:
        return '<p>{}</p>'.format(markdown)  # Format as a paragraph


def emphasis(markdown):
    while re.match(r'(.*)__(.*)__(.*)', markdown):
        i = markdown.index('__')
        j = markdown.rindex('__')
        markdown = '{}<strong>{}</strong>{}'.format(
            markdown[:i], markdown[i + 2:j], markdown[j + 2:])  # Replace double underscores with <strong> tags

    while re.match(r'(.*)_(.*)_(.*)', markdown):
        i = markdown.index('_')
        j = markdown.rindex('_')
        markdown = '{}<em>{}</em>{}'.format(
            markdown[:i], markdown[i + 1:j], markdown[j + 1:])  # Replace single underscores with <em> tags

    return markdown  # Return the modified markdown


def is_header(markdown):
    return re.match(r'#{1,6} (.+)', markdown)  # Check if the line is a header (starts with one or more '#')


def is_unordered_list(markdown):
    return re.match(r'\* (.*)', markdown)  # Check if the line is an unordered list item (starts with '*')
