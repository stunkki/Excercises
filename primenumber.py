''Unoptimized function for detecting prime number '''
def is_prime(x):
    if (x>1):
        if x==2 or x==3 or x==5 or x==7 or x==11:
            return True
        elif x%2==0 or x%3==0 or x%5==0 or x%7==0 or x%11==0:
            return False
            
        elif x%x==0:
            return True
    else:
        return False
