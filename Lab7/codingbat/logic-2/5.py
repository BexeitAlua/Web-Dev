def round_sum(a, b, c):
  return round10(a)+round10(b) + round10(c)

def round10(num):
  res=num%10
  
  if res>=5:
    return num+(10-res)
    
  else:
    return num-res
    