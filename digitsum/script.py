def digit_sum(n):
    x = int(n)
    y = str(n)
    z = len(y)

    a= 0
    result = 0
    while  a <= len(y):
        m = x%10
        result += m
        x = x//10
        a += 1
        print m
    return result

digit_sum(234)
