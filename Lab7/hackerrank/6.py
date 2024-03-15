def cnt_substring(str, sub_str):
    cnt = 0
    for i in range(len(str)):
        if str[i:i+len(sub_str)] == sub_str:
            cnt += 1
    return cnt

if __name__ == '__main__':
    str = input().strip()
    sub_str = input().strip()
    
    cnt = cnt_substring(str, sub_str)
    print(cnt)
