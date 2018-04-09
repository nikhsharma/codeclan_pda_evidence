




@countries = {

  uk: {
    capital: "London",
    population: 1000
  },

  germany: {
    capital: "Berlin",
    population: 900
  }
}


def edit_hash()
  @countries[:uk].delete(:capital)
  @countries[:germany][:currency] = "euro"
  p @countries
end

edit_hash()
