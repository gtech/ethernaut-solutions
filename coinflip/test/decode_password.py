encoded_password = "412076657279207374726f6e67207365637265742070617373776f7264203a29"
#encoded_password = "41207665727920737472"#6f6e67207365637265742070617373776f7264203a29""
def split_by_n(seq, n):
    s = []
    while seq:
        s.append(seq[:n])
        seq = seq[n:]
    return s


split_password = split_by_n(encoded_password, 4)

password_list = map(lambda x: chr(int(x)), split_password)

print(''.join(str(x) for x in password_list))