


@names = ["Nikhil", "Paul", "Mary", "Steven"]



def search_list_of_names(search)
  if @names.include?(search)
    puts "#{search} is on the list."
  else
    puts "#{search} is not on the list."
  end
end

search_list_of_names("Nikhil")
