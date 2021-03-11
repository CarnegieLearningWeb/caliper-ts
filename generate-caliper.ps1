$destination = $(get-location).Path + "/src/models"
remove-item ($destination + "/Events") -force -recurse
remove-item ($destination + "/Entities") -force -recurse

dotnet run --project code-generator -- $destination
npx @imaginelearning/ts-imports-organizer "src/models/**/*.ts"
npx prettier --write "src/models/**/*.ts"
