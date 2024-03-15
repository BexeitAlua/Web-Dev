if __name__ == '__main__':
    n = int(input())
    integer_list = map(int, input().split())
    tuple_input = tuple(integer_list)
    res = hash(tuple_input)
    print(res)