def make_bricks(small, big, goal):
  max_big_inches = big * 5
    
  remaining_inches = goal - min(max_big_inches, goal // 5 * 5)
    
  return remaining_inches <= small
