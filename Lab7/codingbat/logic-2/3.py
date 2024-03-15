def make_chocolate(small, big, goal):
  
    maxi = big * 5
    
    
    remaining_kilos = goal - min(maxi, goal // 5 * 5)
    

    if remaining_kilos <= small:
        return remaining_kilos
    else:
        return -1
