
num = int(input("Indique um número: "))

primo = True
for i in range(2, num -1):
    resto = num % i
    if resto == 0 :
        primo = False
        break

if primo == True:
    print("O número {} é primo" .format(num))
else:
    print("O número {} não é primo" .format(num))