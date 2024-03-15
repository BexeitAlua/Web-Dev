def solve(s):
    words = s.split()

    capitalized_words = [word.capitalize() for word in words]

    res = ' '.join(capitalized_words)
    
    return res

if __name__ == '__main__':
    s = input()
    result = solve(s)
    print(result)
