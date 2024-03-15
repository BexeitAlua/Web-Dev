def last2(str):
  if len(str) <2:
    return 0
    
  last2= str[len(str) - 2:]
  cnt = 0
  
  for i in range(len(str) - 2):
    substr = str[i:i+2]
    if substr == last2:
      cnt +=1
      
  return cnt
