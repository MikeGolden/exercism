def grep(pattern, flags, files):
    # Determine if various flags are present
    line_numbers = "-n" in flags
    only_filenames = "-l" in flags
    case_insensitive = "-i" in flags
    invert = "-v" in flags
    entire_lines = "-x" in flags
    multiple_files = len(files) > 1
    ret = []  # List to store matching lines or file names

    # Iterate through each file specified in the command-line arguments
    for filename in files:
        with open(filename) as f:
            valid_lines = []  # List to store valid (matching) lines within the current file

            # Enumerate through each line in the file
            for i, line in enumerate(f.readlines()):
                line = line.strip()  # Remove leading/trailing whitespace from the line

                # Apply case insensitivity if the -i flag is present
                pattern_ = pattern.lower() if case_insensitive else pattern
                line_ = line.lower() if case_insensitive else line

                # Check if the line matches the pattern (or the entire line matches if -x flag is present),
                # and apply the inversion (-v flag)
                if (line_ == pattern_ if entire_lines else pattern_ in line_) ^ invert:
                    if line_numbers:
                        # Prepend line number and colon to the line
                        line = str(i + 1) + ":" + line
                    if multiple_files:
                        # Prepend filename and colon to the line
                        line = filename + ":" + line
                    valid_lines.append(line + "\n")  # Append the line to the list of valid lines

            # Check if -l flag is present and valid lines exist in the current file
            if only_filenames and valid_lines != []:
                ret.append(filename + "\n")  # Append the filename to the result list
            else:
                ret.extend(valid_lines)  # Append valid lines to the result list

    return "".join(ret)  # Join the list of matching lines or file names into a single string and return it
