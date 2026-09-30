/* build: 2026093001 */
/* Terraform Course 2 question bank: 120 questions. Loaded by tf2-exam.html. */
window.TF2_BANK = [
 {
  "id": "q001",
  "m": 1,
  "q": "How does Terraform usually learn that one resource must be created before another?",
  "o": [
   "From a reference to the other resource's attributes",
   "From the order the blocks appear in the .tf files",
   "From the alphabetical order of the resource names",
   "From a depends_on argument on every single resource"
  ],
  "a": 0
 },
 {
  "id": "q002",
  "m": 1,
  "q": "When should you add depends_on to a resource?",
  "o": [
   "Whenever the resource refers to any other resource",
   "When a dependency exists that no reference expresses",
   "When the resource must be created in a separate run",
   "Whenever count or for_each is used on the resource"
  ],
  "a": 1
 },
 {
  "id": "q003",
  "m": 1,
  "q": "What does depends_on accept?",
  "o": [
   "A list of attributes, such as aws_vpc.main.id",
   "A single string with the resource type",
   "A list of whole resources or modules",
   "A map of resource names to their ids"
  ],
  "a": 2
 },
 {
  "id": "q004",
  "m": 1,
  "q": "What does create_before_destroy = true change?",
  "o": [
   "It stops the resource from ever being destroyed by any plan",
   "It creates the resource before any data sources are read",
   "It skips the plan step for this resource on each run",
   "It creates the replacement before destroying the old object"
  ],
  "a": 3
 },
 {
  "id": "q005",
  "m": 1,
  "q": "A launch template with create_before_destroy has a fixed name. Why might replacement fail?",
  "o": [
   "The new object cannot take the name while the old one exists",
   "Launch templates do not support the lifecycle block at all",
   "The old template is destroyed first, so nothing uses the name",
   "Terraform needs depends_on before it replaces a template"
  ],
  "a": 0
 },
 {
  "id": "q006",
  "m": 1,
  "q": "Which setting makes any plan that would destroy the resource fail?",
  "o": [
   "ignore_changes = all",
   "prevent_destroy = true",
   "create_before_destroy = false",
   "replace_triggered_by = []"
  ],
  "a": 1
 },
 {
  "id": "q007",
  "m": 1,
  "q": "A bucket has prevent_destroy = true. You delete its resource block and run apply. What happens?",
  "o": [
   "The apply fails, because prevent_destroy is still in force",
   "The bucket is removed from state and kept safely in AWS",
   "The bucket is destroyed, because the lifecycle block is gone too",
   "Terraform asks you to confirm the destroy a second time first"
  ],
  "a": 2
 },
 {
  "id": "q008",
  "m": 1,
  "q": "Tags on an instance are changed by another tool, and Terraform keeps trying to undo them. What stops that?",
  "o": [
   "prevent_destroy = true in the lifecycle block",
   "depends_on = [aws_instance.web] on the instance",
   "create_before_destroy = true in the lifecycle block",
   "ignore_changes = [tags] in the lifecycle block"
  ],
  "a": 3
 },
 {
  "id": "q009",
  "m": 1,
  "q": "What does replace_triggered_by do?",
  "o": [
   "Replaces the resource when a listed resource or attribute changes",
   "Replaces the resource every single time terraform apply is run",
   "Replaces the provider plugin when a newer version is released",
   "Replaces the resource only when prevent_destroy is set to false"
  ],
  "a": 0
 },
 {
  "id": "q010",
  "m": 1,
  "q": "In a plan, what does +/- in front of a resource mean?",
  "o": [
   "Update in place, with some attributes added and some removed",
   "Create the replacement first, then destroy the old object",
   "Destroy the old object first, then create the replacement",
   "Read the resource as a data source during the apply"
  ],
  "a": 1
 },
 {
  "id": "q011",
  "m": 1,
  "q": "Which command rebuilds a healthy resource on purpose?",
  "o": [
   "terraform taint aws_instance.web && terraform init",
   "terraform apply -refresh-only -target=aws_instance.web",
   "terraform apply -replace=\"aws_instance.web\"",
   "terraform state rm aws_instance.web && terraform plan"
  ],
  "a": 2
 },
 {
  "id": "q012",
  "m": 1,
  "q": "What is the status of the terraform taint command?",
  "o": [
   "It is the recommended way to force a replacement",
   "It was removed in Terraform 1.0 and no longer runs",
   "It only works with HCP Terraform workspaces",
   "It is deprecated; use apply -replace instead"
  ],
  "a": 3
 },
 {
  "id": "q013",
  "m": 1,
  "q": "Which block types can use depends_on?",
  "o": [
   "Resources, data sources and module blocks",
   "Resources only, never modules or data sources",
   "Variables and outputs only",
   "Provider blocks and the terraform block"
  ],
  "a": 0
 },
 {
  "id": "q014",
  "m": 1,
  "q": "Why can adding depends_on to a data source be unhelpful?",
  "o": [
   "It turns the data source into a managed resource",
   "It can delay reading until apply, so more values are unknown",
   "It makes Terraform read the data source twice in each plan",
   "It stops the data source from being stored in state"
  ],
  "a": 1
 },
 {
  "id": "q015",
  "m": 1,
  "q": "Which value of ignore_changes ignores every argument after creation?",
  "o": [
   "ignore_changes = true",
   "ignore_changes = [\"*\"]",
   "ignore_changes = all",
   "ignore_changes = any"
  ],
  "a": 2
 },
 {
  "id": "q016",
  "m": 2,
  "q": "Where does a validation block go?",
  "o": [
   "Inside a variable block",
   "Inside a provider block",
   "Inside the terraform block",
   "Inside a moved block"
  ],
  "a": 0
 },
 {
  "id": "q017",
  "m": 2,
  "q": "What happens when a variable validation condition is false?",
  "o": [
   "Terraform shows a warning and uses the default value",
   "Terraform stops with the error message you wrote",
   "Terraform skips the resources that use the variable",
   "Terraform asks you to type a new value for it"
  ],
  "a": 1
 },
 {
  "id": "q018",
  "m": 2,
  "q": "Why is can() often used in validation conditions?",
  "o": [
   "It converts any value into a string before the check is made",
   "It hides the value from command output while it is checked",
   "It returns false instead of an error when an expression fails",
   "It runs the condition again whenever the first check fails"
  ],
  "a": 2
 },
 {
  "id": "q019",
  "m": 2,
  "q": "Since Terraform 1.9, what can a variable validation condition refer to?",
  "o": [
   "Only the variable that the validation block belongs to, nothing else",
   "Only constant values written directly into the condition itself",
   "Only resources that were created earlier in the same run",
   "Other variables, locals and data sources, as well as itself"
  ],
  "a": 3
 },
 {
  "id": "q020",
  "m": 2,
  "q": "Where are precondition and postcondition blocks written for a resource?",
  "o": [
   "Inside the resource's lifecycle block",
   "Inside a separate check block",
   "Inside the provider's configuration block",
   "Inside a validation block for the resource"
  ],
  "a": 0
 },
 {
  "id": "q021",
  "m": 2,
  "q": "In a postcondition, how do you refer to the object being checked?",
  "o": [
   "this",
   "self",
   "each.value",
   "resource"
  ],
  "a": 1
 },
 {
  "id": "q022",
  "m": 2,
  "q": "When is a precondition evaluated?",
  "o": [
   "Only when terraform validate is run on the folder",
   "After the object is created, by referring to self",
   "Before the object is created, updated or read",
   "Only when the resource is being destroyed at the end"
  ],
  "a": 2
 },
 {
  "id": "q023",
  "m": 2,
  "q": "Which block type can have a precondition but not a postcondition?",
  "o": [
   "resource",
   "data",
   "module",
   "output"
  ],
  "a": 3
 },
 {
  "id": "q024",
  "m": 2,
  "q": "What happens when a postcondition fails during apply?",
  "o": [
   "Terraform reports an error and the run stops",
   "Terraform shows a warning and carries on",
   "Terraform destroys the resource that failed",
   "Terraform retries the apply up to three times"
  ],
  "a": 0
 },
 {
  "id": "q025",
  "m": 2,
  "q": "Where is a check block written?",
  "o": [
   "Inside a resource's lifecycle block",
   "At the top level of a module, on its own",
   "Inside a variable's own validation block",
   "Inside the terraform settings block at the top"
  ],
  "a": 1
 },
 {
  "id": "q026",
  "m": 2,
  "q": "What happens when a check block's assertion fails?",
  "o": [
   "The run stops before any resource changes",
   "The resources named in the assertion are replaced",
   "A warning is shown and the run continues",
   "The state is rolled back to the last version"
  ],
  "a": 2
 },
 {
  "id": "q027",
  "m": 2,
  "q": "What is special about a data source written inside a check block?",
  "o": [
   "It is read before any variable validation runs",
   "It is stored in state as a managed resource",
   "It can be used anywhere else in the module",
   "Only that check block can use it"
  ],
  "a": 3
 },
 {
  "id": "q028",
  "m": 2,
  "q": "When do check blocks run?",
  "o": [
   "At the end of every plan and apply",
   "Only when terraform validate is run",
   "Only during terraform init",
   "Only when a resource is being replaced"
  ],
  "a": 0
 },
 {
  "id": "q029",
  "m": 2,
  "q": "You want the plan to stop if an AMI found by a data source is not x86_64. What fits best?",
  "o": [
   "A check block with an assert on the AMI's architecture value",
   "A postcondition on the data source using self.architecture",
   "A validation block placed inside the provider configuration",
   "An ignore_changes rule on the instance's ami argument"
  ],
  "a": 1
 },
 {
  "id": "q030",
  "m": 2,
  "q": "Which statement about error_message in a validation or condition block is correct?",
  "o": [
   "It is optional and Terraform writes one if it is missing",
   "It must be a number that maps to a list of messages",
   "It is required and is shown when the condition is false",
   "It is shown when the condition is true, as a confirmation"
  ],
  "a": 2
 },
 {
  "id": "q031",
  "m": 3,
  "q": "What does sensitive = true on a variable do?",
  "o": [
   "It hides the value in plan and apply output",
   "It encrypts the value inside the state file",
   "It keeps the value out of the state file",
   "It stops the value being used in resources"
  ],
  "a": 0
 },
 {
  "id": "q032",
  "m": 3,
  "q": "An output uses a sensitive variable but does not set sensitive = true. What happens?",
  "o": [
   "Terraform prints the value in plain text in the output list",
   "Terraform reports an error and asks you to mark it sensitive",
   "Terraform leaves the output out of the state file completely",
   "Terraform encrypts the output value before it prints it"
  ],
  "a": 1
 },
 {
  "id": "q033",
  "m": 3,
  "q": "Which function removes the sensitive mark from a value you know is safe to show?",
  "o": [
   "sensitive()",
   "unmask()",
   "nonsensitive()",
   "tostring()"
  ],
  "a": 2
 },
 {
  "id": "q034",
  "m": 3,
  "q": "Where is a value from a data source such as vault_kv_secret_v2 stored?",
  "o": [
   "Nowhere; data source results are never stored anywhere",
   "Only in the saved plan file, and never in the state file",
   "In the .terraform.lock.hcl file, next to the providers",
   "In the state file, like other data source results"
  ],
  "a": 3
 },
 {
  "id": "q035",
  "m": 3,
  "q": "What is special about an ephemeral resource?",
  "o": [
   "Its values are used during the run and never stored in plan or state",
   "It is destroyed automatically at the end of each apply that uses it",
   "It is created only when terraform plan is run with an -ephemeral flag",
   "It keeps its values in memory until the next terraform init is run"
  ],
  "a": 0
 },
 {
  "id": "q036",
  "m": 3,
  "q": "How do you refer to an ephemeral resource of type vault_kv_secret_v2 named db?",
  "o": [
   "data.vault_kv_secret_v2.db",
   "ephemeral.vault_kv_secret_v2.db",
   "vault_kv_secret_v2.db",
   "secret.vault_kv_secret_v2.db"
  ],
  "a": 1
 },
 {
  "id": "q037",
  "m": 3,
  "q": "What is a write-only argument?",
  "o": [
   "An argument that can be set only once and never changed later",
   "An argument that only the provider itself is allowed to write to",
   "An argument whose value is sent to the provider and never stored",
   "An argument that is only written into the saved plan file"
  ],
  "a": 2
 },
 {
  "id": "q038",
  "m": 3,
  "q": "What do write-only argument names usually end with?",
  "o": [
   "_secret",
   "_ephemeral",
   "_hidden",
   "_wo"
  ],
  "a": 3
 },
 {
  "id": "q039",
  "m": 3,
  "q": "You change the value given to password_wo, but the plan shows no changes. What should you do?",
  "o": [
   "Increase the matching password_wo_version value",
   "Run terraform init -upgrade to refresh the provider",
   "Mark the value sensitive and run the plan again",
   "Delete the state file so Terraform sees the change"
  ],
  "a": 0
 },
 {
  "id": "q040",
  "m": 3,
  "q": "Where can an ephemeral value be used?",
  "o": [
   "In any resource argument, exactly like a normal value",
   "In write-only arguments and other ephemeral contexts",
   "Only in the outputs of the root module of a configuration",
   "Only inside the terraform block, as a setting value"
  ],
  "a": 1
 },
 {
  "id": "q041",
  "m": 3,
  "q": "Where can an output be marked ephemeral = true?",
  "o": [
   "Only in the root module",
   "In any module, root or child",
   "Only in child modules",
   "Nowhere; outputs cannot be ephemeral"
  ],
  "a": 2
 },
 {
  "id": "q042",
  "m": 3,
  "q": "Which is the safest way to supply a database password to Terraform?",
  "o": [
   "Write it as the default of a variable in variables.tf",
   "Store it in terraform.tfvars and commit that file",
   "Put it in the provider block as a fixed string",
   "Read it from Vault with an ephemeral resource"
  ],
  "a": 3
 },
 {
  "id": "q043",
  "m": 3,
  "q": "Why are Vault dynamic secrets safer than long-lived keys?",
  "o": [
   "They are created on request and expire after a short time",
   "They are stored in the Terraform state in encrypted form",
   "They can only be read by the Terraform CLI itself",
   "They never leave the Vault server during a run"
  ],
  "a": 0
 },
 {
  "id": "q044",
  "m": 3,
  "q": "Besides the state file, which place can hold sensitive values in plain text?",
  "o": [
   "The .terraform.lock.hcl file for the folder",
   "A saved plan file created with -out",
   "The provider plugin binary in .terraform",
   "The README file of a registry module"
  ],
  "a": 1
 },
 {
  "id": "q045",
  "m": 3,
  "q": "Which Terraform versions added ephemeral values and write-only arguments?",
  "o": [
   "1.5 and 1.6",
   "1.7 and 1.8",
   "1.10 and 1.11",
   "1.3 and 1.4"
  ],
  "a": 2
 },
 {
  "id": "q046",
  "m": 4,
  "q": "What is the root module?",
  "o": [
   "The folder where you run Terraform commands",
   "The first module listed on the Terraform Registry",
   "A module that every configuration must download",
   "The module that holds the provider binaries"
  ],
  "a": 0
 },
 {
  "id": "q047",
  "m": 4,
  "q": "Which source is a local module?",
  "o": [
   "terraform-aws-modules/vpc/aws",
   "./modules/web",
   "github.com/my-org/web",
   "app.terraform.io/org/web/aws"
  ],
  "a": 1
 },
 {
  "id": "q048",
  "m": 4,
  "q": "What does the source \"terraform-aws-modules/vpc/aws\" refer to?",
  "o": [
   "A folder named vpc on your own computer",
   "A Git repository called terraform-aws-modules",
   "A module on the public Terraform Registry",
   "A module in an HCP Terraform private registry"
  ],
  "a": 2
 },
 {
  "id": "q049",
  "m": 4,
  "q": "Which command downloads the modules a configuration uses?",
  "o": [
   "terraform validate",
   "terraform fmt",
   "terraform plan",
   "terraform init"
  ],
  "a": 3
 },
 {
  "id": "q050",
  "m": 4,
  "q": "Where does Terraform keep downloaded modules?",
  "o": [
   "In .terraform/modules",
   "In .terraform.lock.hcl",
   "In the terraform.tfstate file",
   "In ~/.terraform.d/plugins"
  ],
  "a": 0
 },
 {
  "id": "q051",
  "m": 4,
  "q": "How does a child module get a value from its caller?",
  "o": [
   "By reading the caller's variables directly",
   "Through arguments in the caller's module block",
   "From the caller's terraform.tfvars file",
   "By reading the caller's resources from state"
  ],
  "a": 1
 },
 {
  "id": "q052",
  "m": 4,
  "q": "How does the root module read an output named vpc_id from a module called network?",
  "o": [
   "network.outputs.vpc_id",
   "output.network.vpc_id",
   "module.network.vpc_id",
   "var.network.vpc_id"
  ],
  "a": 2
 },
 {
  "id": "q053",
  "m": 4,
  "q": "A child module variable has no default. What happens if the module block does not set it?",
  "o": [
   "Terraform uses an empty string for the variable and continues",
   "Terraform reads the value from terraform.tfvars in the root",
   "Terraform asks for the value when you run terraform plan",
   "Terraform reports an error that the argument is required"
  ],
  "a": 3
 },
 {
  "id": "q054",
  "m": 4,
  "q": "For which module source can the version argument be used?",
  "o": [
   "A module from a public or private registry",
   "A local path such as ../shared/network",
   "A Git URL that has a ?ref= tag at the end",
   "A zip file served from an S3 bucket by URL"
  ],
  "a": 0
 },
 {
  "id": "q055",
  "m": 4,
  "q": "How do you pin a module that comes from a Git repository?",
  "o": [
   "Add version = \"1.2.0\" to the module block",
   "Add ?ref=v1.2.0 to the end of the source URL",
   "Add the version to the .terraform.lock.hcl file",
   "Add required_version inside the module block"
  ],
  "a": 1
 },
 {
  "id": "q056",
  "m": 4,
  "q": "Does the dependency lock file record module versions?",
  "o": [
   "Yes, both modules and providers are recorded",
   "Yes, but only for modules from the public registry",
   "No, it records provider versions only",
   "No, it records the Terraform CLI version only"
  ],
  "a": 2
 },
 {
  "id": "q057",
  "m": 4,
  "q": "Which meta-arguments can a module block use?",
  "o": [
   "Only source and version, and nothing else",
   "lifecycle and provisioner, like a resource",
   "backend and cloud, to choose where state goes",
   "count, for_each, depends_on and providers"
  ],
  "a": 3
 },
 {
  "id": "q058",
  "m": 4,
  "q": "What is the state address of an aws_vpc named main inside a module called network?",
  "o": [
   "module.network.aws_vpc.main",
   "network.module.aws_vpc.main",
   "aws_vpc.network.main",
   "module.aws_vpc.main.network"
  ],
  "a": 0
 },
 {
  "id": "q059",
  "m": 4,
  "q": "Which should a reusable child module contain?",
  "o": [
   "A provider block with fixed credentials in it",
   "required_providers, but no provider blocks",
   "A backend block for storing its own state",
   "A terraform.tfvars file with default values"
  ],
  "a": 1
 },
 {
  "id": "q060",
  "m": 4,
  "q": "You pass -var=\"instance_type=t3.small\" on the command line. Which variables does it set?",
  "o": [
   "Every variable with that name in every module",
   "Only variables in modules from the registry",
   "Only the root module's variables",
   "Only variables that have no default"
  ],
  "a": 2
 },
 {
  "id": "q061",
  "m": 5,
  "q": "What is a main reason to use a remote backend?",
  "o": [
   "So a team and pipelines share one state, safely",
   "So resources are created faster by the provider",
   "So the .tf files no longer need to be in Git",
   "So Terraform no longer needs the provider plugins"
  ],
  "a": 0
 },
 {
  "id": "q062",
  "m": 5,
  "q": "What does state locking prevent?",
  "o": [
   "People reading the state without having permission",
   "Two runs writing the same state at the same time",
   "Resources being changed manually in the cloud console",
   "Old provider versions being installed by terraform init"
  ],
  "a": 1
 },
 {
  "id": "q063",
  "m": 5,
  "q": "In the S3 backend, which setting turns on S3-native state locking?",
  "o": [
   "dynamodb_table = \"locks\"",
   "lock = \"s3\"",
   "use_lockfile = true",
   "encrypt = true"
  ],
  "a": 2
 },
 {
  "id": "q064",
  "m": 5,
  "q": "What is the status of DynamoDB-based locking in the S3 backend?",
  "o": [
   "It is the only way to lock state stored in S3",
   "It is required when encrypt = true is set",
   "It was added in Terraform 1.10 as a new option",
   "It is deprecated in favour of use_lockfile"
  ],
  "a": 3
 },
 {
  "id": "q065",
  "m": 5,
  "q": "A run crashed and left a lock on the state. No run is active. What do you use?",
  "o": [
   "terraform force-unlock LOCK_ID",
   "terraform init -reconfigure -lock",
   "terraform apply -lock=false -auto",
   "terraform state rm LOCK_ID"
  ],
  "a": 0
 },
 {
  "id": "q066",
  "m": 5,
  "q": "What does -lock-timeout=5m do?",
  "o": [
   "Releases the lock after the run has lasted five minutes",
   "Waits up to five minutes to get the lock before failing",
   "Keeps the state locked for five minutes after the apply",
   "Stops the plan if it runs for more than five minutes"
  ],
  "a": 1
 },
 {
  "id": "q067",
  "m": 5,
  "q": "Can a backend block use variables, such as bucket = var.state_bucket?",
  "o": [
   "Yes, any variable can be used in a backend block",
   "Yes, but only variables with a default value",
   "No; use literal values or -backend-config at init",
   "No; backend values must come from environment variables"
  ],
  "a": 2
 },
 {
  "id": "q068",
  "m": 5,
  "q": "What is partial backend configuration?",
  "o": [
   "Storing only some of the resources in the remote state",
   "Using two different backends for the same configuration",
   "Locking only one part of the state file at a time",
   "Leaving settings out of the block and passing them at init"
  ],
  "a": 3
 },
 {
  "id": "q069",
  "m": 5,
  "q": "You add a backend block to a configuration that has local state. How do you move the state?",
  "o": [
   "terraform init -migrate-state",
   "terraform apply -migrate",
   "terraform state push -backend",
   "terraform plan -refresh-only"
  ],
  "a": 0
 },
 {
  "id": "q070",
  "m": 5,
  "q": "What does terraform init -reconfigure do?",
  "o": [
   "Copies existing state into the new backend first",
   "Uses the new backend settings without copying state",
   "Deletes the remote state and starts again from empty",
   "Upgrades all of the providers and modules at once"
  ],
  "a": 1
 },
 {
  "id": "q071",
  "m": 5,
  "q": "What can the terraform_remote_state data source read from another configuration?",
  "o": [
   "Every resource attribute in the other state",
   "The other configuration's .tf files",
   "The root module outputs of the other state",
   "The other configuration's variables"
  ],
  "a": 2
 },
 {
  "id": "q072",
  "m": 5,
  "q": "Why can terraform_remote_state be a security concern?",
  "o": [
   "It changes the other configuration's resources when it reads",
   "It stores the other state's secrets in your own .tf files",
   "It unlocks the other configuration's state while it reads it",
   "It needs read access to the whole state, which may hold secrets"
  ],
  "a": 3
 },
 {
  "id": "q073",
  "m": 5,
  "q": "How many backend blocks can one configuration have?",
  "o": [
   "One",
   "One per provider",
   "One per module",
   "Any number"
  ],
  "a": 0
 },
 {
  "id": "q074",
  "m": 5,
  "q": "What must you run after changing the backend block?",
  "o": [
   "terraform validate",
   "terraform init",
   "terraform fmt",
   "terraform refresh"
  ],
  "a": 1
 },
 {
  "id": "q075",
  "m": 5,
  "q": "Which is a good practice for an S3 bucket that holds Terraform state?",
  "o": [
   "Allow public read so pipelines can use it",
   "Create it in the same configuration it stores",
   "Turn on versioning and restrict access with IAM",
   "Store it in the same bucket as application logs"
  ],
  "a": 2
 },
 {
  "id": "q076",
  "m": 6,
  "q": "What is drift?",
  "o": [
   "A difference between real resources and state, from outside changes",
   "A newer provider version that has not been installed by init yet",
   "A resource that exists in the code but is not yet in the state",
   "A plan that takes much longer than usual to finish running"
  ],
  "a": 0
 },
 {
  "id": "q077",
  "m": 6,
  "q": "What does terraform plan -refresh-only show?",
  "o": [
   "The changes needed to make the real resources in AWS match your code",
   "How the real resources differ from state, without proposing changes",
   "Only the resources that were created during the most recent apply",
   "The provider plugins that need to be refreshed by terraform init"
  ],
  "a": 1
 },
 {
  "id": "q078",
  "m": 6,
  "q": "What does terraform apply -refresh-only change?",
  "o": [
   "The real resources, to match your code",
   "Your .tf files, to match the real resources",
   "The state, to match the real resources",
   "Nothing; it is only a preview"
  ],
  "a": 2
 },
 {
  "id": "q079",
  "m": 6,
  "q": "After terraform apply -refresh-only accepts an outside change, what should you do next?",
  "o": [
   "Delete the state backup file from the working folder",
   "Run terraform init -upgrade to update the providers",
   "Run terraform apply -replace on the changed resource",
   "Update the .tf files so the next plan does not undo it"
  ],
  "a": 3
 },
 {
  "id": "q080",
  "m": 6,
  "q": "Why is terraform refresh deprecated?",
  "o": [
   "It updates state without showing you the changes first",
   "It changes real resources to match the code without a plan",
   "It only works with the local backend",
   "It deletes resources that are not in the code"
  ],
  "a": 0
 },
 {
  "id": "q081",
  "m": 6,
  "q": "You rename a resource in the code with no other change. What does Terraform plan to do?",
  "o": [
   "Update the resource in place with the new name",
   "Destroy the old object and create a new one",
   "Nothing, because the object has not changed",
   "Import the resource again under the new name"
  ],
  "a": 1
 },
 {
  "id": "q082",
  "m": 6,
  "q": "Which block tells Terraform an object has a new address?",
  "o": [
   "removed",
   "import",
   "moved",
   "lifecycle"
  ],
  "a": 2
 },
 {
  "id": "q083",
  "m": 6,
  "q": "Which moved block moves aws_vpc.main into a module called network?",
  "o": [
   "moved { from = module.network to = module.network.aws_vpc.main }",
   "moved { to = aws_vpc.main from = module.network.aws_vpc.main }",
   "moved { from = aws_vpc.main to = network.module.aws_vpc.main }",
   "moved { from = aws_vpc.main to = module.network.aws_vpc.main }"
  ],
  "a": 3
 },
 {
  "id": "q084",
  "m": 6,
  "q": "What does a removed block with destroy = false do?",
  "o": [
   "Removes the resource from state and leaves it in AWS",
   "Destroys the resource in AWS but keeps it in state",
   "Stops the resource from ever being destroyed by a plan",
   "Moves the resource into another configuration's state"
  ],
  "a": 0
 },
 {
  "id": "q085",
  "m": 6,
  "q": "What happens if you delete a resource block without adding a removed block?",
  "o": [
   "Terraform forgets the resource and leaves it in AWS",
   "Terraform plans to destroy the resource",
   "Terraform reports an error until the block is restored",
   "Terraform keeps managing the resource from state"
  ],
  "a": 1
 },
 {
  "id": "q086",
  "m": 6,
  "q": "Which CLI command matches what a removed block with destroy = false does?",
  "o": [
   "terraform state mv",
   "terraform destroy -target",
   "terraform state rm",
   "terraform apply -replace"
  ],
  "a": 2
 },
 {
  "id": "q087",
  "m": 6,
  "q": "Why is a moved block often better than terraform state mv?",
  "o": [
   "It moves the real resource to another AWS region as well",
   "It works even when the provider plugin is not installed",
   "It skips the plan and changes the state file straight away",
   "It is in the code, reviewed in a plan and applied for everyone"
  ],
  "a": 3
 },
 {
  "id": "q088",
  "m": 6,
  "q": "Which moved block changes a count resource to a for_each resource?",
  "o": [
   "moved { from = aws_subnet.public[0] to = aws_subnet.public[\"a\"] }",
   "moved { from = aws_subnet.public to = aws_subnet.public.for_each }",
   "moved { from = count.aws_subnet to = each.aws_subnet }",
   "moved { from = aws_subnet[0].public to = aws_subnet[\"a\"].public }"
  ],
  "a": 0
 },
 {
  "id": "q089",
  "m": 6,
  "q": "What does terraform plan -refresh=false do?",
  "o": [
   "Refreshes the state but does not plan any changes at all",
   "Skips reading real resources and uses state as it is",
   "Refreshes only the resources that are known to have drifted",
   "Stops the plan from taking a lock on the state file"
  ],
  "a": 1
 },
 {
  "id": "q090",
  "m": 6,
  "q": "From which Terraform version is the removed block available?",
  "o": [
   "1.3",
   "1.5",
   "1.7",
   "1.10"
  ],
  "a": 2
 },
 {
  "id": "q091",
  "m": 7,
  "q": "What does importing a resource do?",
  "o": [
   "Records an existing object in Terraform state",
   "Copies a resource from one AWS account to another",
   "Downloads a module from the Terraform Registry",
   "Creates a new resource based on an old one"
  ],
  "a": 0
 },
 {
  "id": "q092",
  "m": 7,
  "q": "When does an import block take effect?",
  "o": [
   "Immediately when the file is saved",
   "During plan and apply, like other changes",
   "Only during terraform init",
   "Only when terraform import is also run"
  ],
  "a": 1
 },
 {
  "id": "q093",
  "m": 7,
  "q": "What does the id argument of an import block contain?",
  "o": [
   "The resource address used in your configuration",
   "The AWS account number that owns the existing object",
   "The provider's identifier for the existing object",
   "The version of the provider to run the import with"
  ],
  "a": 2
 },
 {
  "id": "q094",
  "m": 7,
  "q": "Which command writes a draft resource block for an import block?",
  "o": [
   "terraform import -generate-config=generated.tf",
   "terraform init -import-config-out=generated.tf",
   "terraform show -config-out=generated.tf -import",
   "terraform plan -generate-config-out=generated.tf"
  ],
  "a": 3
 },
 {
  "id": "q095",
  "m": 7,
  "q": "How does the terraform import command differ from an import block?",
  "o": [
   "It writes to state immediately, without a plan to review",
   "It can import many resources at once by using for_each",
   "It writes a draft resource block into a file for you",
   "It only works with workspaces in HCP Terraform"
  ],
  "a": 0
 },
 {
  "id": "q096",
  "m": 7,
  "q": "From which Terraform version can an import block use for_each?",
  "o": [
   "1.5",
   "1.7",
   "1.10",
   "1.12"
  ],
  "a": 1
 },
 {
  "id": "q097",
  "m": 7,
  "q": "After importing, what should you always check?",
  "o": [
   "That the lock file lists the imported resource",
   "That the resource has prevent_destroy set",
   "That a plan shows no unexpected changes",
   "That the provider was upgraded by init"
  ],
  "a": 2
 },
 {
  "id": "q098",
  "m": 7,
  "q": "Which command shows every attribute of one resource in state?",
  "o": [
   "terraform state list aws_instance.web",
   "terraform output aws_instance.web",
   "terraform show -resource aws_instance.web",
   "terraform state show aws_instance.web"
  ],
  "a": 3
 },
 {
  "id": "q099",
  "m": 7,
  "q": "Which command prints the current state as JSON, from any backend?",
  "o": [
   "terraform state pull",
   "terraform state push",
   "terraform show -list",
   "terraform output -state"
  ],
  "a": 0
 },
 {
  "id": "q100",
  "m": 7,
  "q": "Which command can list only the resources inside a module called web?",
  "o": [
   "terraform state show module.web",
   "terraform state list module.web",
   "terraform output module.web",
   "terraform show -module=web"
  ],
  "a": 1
 },
 {
  "id": "q101",
  "m": 7,
  "q": "What does terraform state push do?",
  "o": [
   "Uploads the provider plugins to the remote backend",
   "Sends the current plan to HCP Terraform for review",
   "Overwrites the remote state with a local file",
   "Copies the current state into a new CLI workspace"
  ],
  "a": 2
 },
 {
  "id": "q102",
  "m": 7,
  "q": "Which environment variable sets how detailed Terraform's logs are?",
  "o": [
   "TF_LOG_PATH",
   "TF_DEBUG",
   "TF_VERBOSE",
   "TF_LOG"
  ],
  "a": 3
 },
 {
  "id": "q103",
  "m": 7,
  "q": "Which is the most detailed log level?",
  "o": [
   "TRACE",
   "DEBUG",
   "INFO",
   "WARN"
  ],
  "a": 0
 },
 {
  "id": "q104",
  "m": 7,
  "q": "You set TF_LOG_PATH=./tf.log but no TF_LOG. What happens?",
  "o": [
   "Logs are written to tf.log at the INFO level",
   "Nothing is logged, because no level is set",
   "Logs are written to the screen and to tf.log",
   "Terraform reports an error and stops"
  ],
  "a": 1
 },
 {
  "id": "q105",
  "m": 7,
  "q": "You need detailed logs from the AWS provider but not from Terraform itself. What do you set?",
  "o": [
   "TF_LOG=TRACE and TF_LOG_CORE=TRACE together",
   "TF_LOG_PATH=provider.log only, with no level",
   "TF_LOG_PROVIDER=TRACE and TF_LOG_CORE=WARN",
   "TF_LOG=ERROR and TF_LOG_PATH=aws.log together"
  ],
  "a": 2
 },
 {
  "id": "q106",
  "m": 8,
  "q": "What was HCP Terraform called before 2024?",
  "o": [
   "Terraform Cloud",
   "Terraform Enterprise",
   "Terraform Community",
   "Terraform Registry"
  ],
  "a": 0
 },
 {
  "id": "q107",
  "m": 8,
  "q": "What is Terraform Enterprise?",
  "o": [
   "The free tier of HCP Terraform for small teams",
   "The self-hosted version of HCP Terraform",
   "The Terraform CLI with paid support added",
   "A paid module collection on the Terraform Registry"
  ],
  "a": 1
 },
 {
  "id": "q108",
  "m": 8,
  "q": "In the VCS-driven workflow, what happens when a pull request is opened?",
  "o": [
   "The workspace applies the changes in the pull request immediately",
   "The workspace locks itself until the pull request is merged",
   "A speculative plan runs and is shown on the pull request",
   "Nothing happens until someone starts a run by hand"
  ],
  "a": 2
 },
 {
  "id": "q109",
  "m": 8,
  "q": "What is a speculative plan?",
  "o": [
   "A plan that is applied automatically after review",
   "A plan that guesses values it cannot know yet",
   "A plan that runs on your own computer only",
   "A plan-only run that cannot be applied"
  ],
  "a": 3
 },
 {
  "id": "q110",
  "m": 8,
  "q": "In the CLI-driven workflow, where do terraform plan and apply execute?",
  "o": [
   "In HCP Terraform, with output streamed to your terminal",
   "On your own computer, with the state uploaded afterwards",
   "In your CI pipeline, started through the HCP Terraform API",
   "On the VCS server that is connected to the workspace"
  ],
  "a": 0
 },
 {
  "id": "q111",
  "m": 8,
  "q": "Which block connects a configuration to HCP Terraform?",
  "o": [
   "backend \"hcp\" { }",
   "cloud { }",
   "provider \"tfe\" { }",
   "remote_state { }"
  ],
  "a": 1
 },
 {
  "id": "q112",
  "m": 8,
  "q": "Which command creates an API token for the Terraform CLI to use with HCP Terraform?",
  "o": [
   "terraform init -token",
   "terraform workspace new",
   "terraform login",
   "terraform connect"
  ],
  "a": 2
 },
 {
  "id": "q113",
  "m": 8,
  "q": "What happens to existing local state when you add a cloud block and run terraform init?",
  "o": [
   "It is deleted, and the resources are created again from scratch",
   "It is ignored, and a new empty state is started in the workspace",
   "It must be uploaded by hand later with terraform state push",
   "Init offers to migrate it into the HCP Terraform workspace"
  ],
  "a": 3
 },
 {
  "id": "q114",
  "m": 8,
  "q": "Which execution mode stores state in HCP Terraform but runs plans on your own computer?",
  "o": [
   "Local",
   "Remote",
   "Agent",
   "Speculative"
  ],
  "a": 0
 },
 {
  "id": "q115",
  "m": 8,
  "q": "What is a variable set?",
  "o": [
   "A list of variables that are declared inside one module",
   "A group of variables applied to many workspaces or projects",
   "A file of variables committed to the connected VCS repository",
   "A set of outputs that is shared between two workspaces"
  ],
  "a": 1
 },
 {
  "id": "q116",
  "m": 8,
  "q": "How are HCP Terraform organisations, projects and workspaces arranged?",
  "o": [
   "Workspaces contain projects, which contain organisations",
   "Projects contain organisations, which contain workspaces",
   "Organisations contain projects, which contain workspaces",
   "Each workspace is its own separate organisation"
  ],
  "a": 2
 },
 {
  "id": "q117",
  "m": 8,
  "q": "What does a run trigger do?",
  "o": [
   "Starts a run on a fixed schedule, such as every night at 2 a.m.",
   "Starts a run whenever a variable set used by it is changed",
   "Starts a run in the workspace when a policy check fails",
   "Starts a run when a source workspace finishes an apply"
  ],
  "a": 3
 },
 {
  "id": "q118",
  "m": 8,
  "q": "Which policy enforcement level blocks an apply and cannot be overridden?",
  "o": [
   "Hard-mandatory",
   "Soft-mandatory",
   "Advisory",
   "Speculative"
  ],
  "a": 0
 },
 {
  "id": "q119",
  "m": 8,
  "q": "What do dynamic provider credentials give you?",
  "o": [
   "A copy of your local AWS profile, stored in the workspace",
   "Short-lived cloud credentials without stored long-lived keys",
   "Credentials that are written into the state file for each run",
   "A shared password for every team in the organisation to use"
  ],
  "a": 1
 },
 {
  "id": "q120",
  "m": 8,
  "q": "How are HCP Terraform workspaces different from CLI workspaces?",
  "o": [
   "They are the same thing with a different name",
   "CLI workspaces hold their own variables and run history",
   "HCP workspaces hold state, variables, settings and runs",
   "HCP workspaces can only hold one resource each"
  ],
  "a": 2
 }
];
