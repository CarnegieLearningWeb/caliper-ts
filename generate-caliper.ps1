$destination = $(get-location).Path + "/src/models"
remove-item ($destination) -force -recurse

dotnet run --project code-generator -- $destination
npx ts-imports-organizer "src/models/**/*.ts"
npx prettier --write "src/models/**/*.ts"
