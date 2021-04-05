$destination = $(get-location).Path + "/src/models"
Get-ChildItem "src/models" -Recurse | Where-Object{$_.Name -Match ".*(?<!\.test)\.ts"} | Remove-Item -Force

dotnet run --project code-generator -- $destination
npx ts-imports-organizer "src/models/**/*.ts"
npx prettier --write "src/models/**/*.ts"
