from shutil import copyfile
# Just copy this into a new truffle directory with the 'privacy' directory one directory up and run it.

copyfile("../privacy/truffle.js", "./truffle.js")

from os import listdir
contracts = listdir("./contracts")

contracts = list(map( lambda x: x[:-4], contracts))
contracts.remove('Migrations')
copyfile("../privacy/test/findFlip.js", "./findFlip.js")

i = 2
for contract in contracts:
    migration_file = "./migrations/"+ str(i) + "_" + contract + ".js"
    copyfile("./migrations/1_initial_migration.js", migration_file)
    contract_js = open(migration_file)
    content = contract_js.readlines()
    content = "".join(content)
    content = content.replace('Migrations', contract)
    # import pdb; pdb.set_trace()
    contract_js = open(migration_file, 'w')
    contract_js.write(content)
    i+=1