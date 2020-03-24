from os import listdir
import sys
sys.argv[0] = "contracts/ethernaut.evm"
input_file = sys.argv[0]
#hex_data = open(input_file).readlines()[0]
hex_string = open(input_file).readlines()[0]
raw = bytes.fromhex(hex_string[2:])
raw_barray = bytearray(raw)
output_bin_file = open(input_file[:-4] + ".bin",'w')
output_bin_file.write('EVM')
output_bin_file.close()
output_bin_file = open(input_file[:-4] + ".bin",'ab')
#import pdb; pdb.set_trace()

#output_bin_file.write('EVM' + raw_barray)
output_bin_file.write(raw_barray)
