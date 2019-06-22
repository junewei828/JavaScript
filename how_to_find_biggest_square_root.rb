def square_nums(max_num)
    i = 1
	while ((i+1) * (i+1) < max_num)
      i += 1
  end
  return i
end

puts square_nums(5) # == 2
puts square_nums(10) # == 3
puts square_nums(25) # == 4