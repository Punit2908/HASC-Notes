a = int(input("a"))
b = int(input("b"))
c = int(input("c"))

ls = [a,b,c]

res = [[i,j,k] for i in range(a+1) for j in range(b+1) for k in range(c+1) if i+j+k != 0]
print(res)