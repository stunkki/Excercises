def factorial(x):
    y=1
    if x==1:
        y=1
        return y
    while x>1:
        y*=x
        x-=1
    return y
