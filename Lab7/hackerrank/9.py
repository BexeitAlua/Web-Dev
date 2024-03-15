if __name__ == '__main__':
    m = int(input())
    set_a = set(map(int, input().split()))

    n = int(input())
    set_b = set(map(int, input().split()))

    diff = set_a.symmetric_difference(set_b)

    for i in sorted(diff):
        print(i)
