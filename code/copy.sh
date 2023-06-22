#!/bin/bash
# Specify the destination directory
destination_dir="../$1/$2"

# Specify the files or patterns to be exempted (separated by spaces)
exempted_files=("copy.sh" "run.sh")

# Create the destination directory if it doesn't exist
if [ ! -d "$destination_dir" ]; then
    mkdir -p "$destination_dir"
fi

# Copy all files from the current directory to the destination directory, excluding the exempted files
for file in *; do
    should_copy=true
    for exempted_file in "${exempted_files[@]}"; do
        if [[ $file == $exempted_file ]]; then
            should_copy=false
            break
        fi
    done
    if [ "$should_copy" = true ]; then
        cp "$file" "$destination_dir"
    fi
done

echo "Files copied successfully to $destination_dir"