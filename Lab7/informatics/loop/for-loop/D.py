x, d = map(int, input().split())


x_str = str(x)

cnt = 0

for i in x_str:
    if int(i) == d:
        cnt += 1

print(cnt)
