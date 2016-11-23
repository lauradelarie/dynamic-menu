# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Table.delete_all
Burger.delete_all
Sauce.delete_all
Topping.delete_all
Side.delete_all

table1 = Table.create(tablenumber: "Table 1")
table2 = Table.create(tablenumber: "Table 2")
table3 = Table.create(tablenumber: "Table 3")
table4 = Table.create(tablenumber: "Table 4")
table5 = Table.create(tablenumber: "Table 5")
table6 = Table.create(tablenumber: "Table 6")


irish1 = Burger.create(meat: "Irish small", grams: 250, price: 6.95, veg: false, gluten: true)
irish2 = Burger.create(meat: "Irish large", grams: 350, price: 8.95, veg: false, gluten: true)
angus1 = Burger.create(meat: "Angus small", grams: 250, price: 7.95, veg: false, gluten: true)
angus2 = Burger.create(meat: "Angus large", grams: 350, price: 9.95, veg: false, gluten: true)
chicken1 = Burger.create(meat: "Chicken Sandwich", grams: 200, price: 6.95, veg: false, gluten: true)
portobello2 = Burger.create(meat: "Portobello", price: 8.95, veg: true, gluten: false)

mayo = Sauce.create(name: "Mayonaise", price: 0.60, veg: true, gluten: false)
ketchup = Sauce.create(name: "Ketchup", price: 0.60, veg: true, gluten: false)
bbq = Sauce.create(name: "Barbeque sauce", price: 0.80)
hot = Sauce.create(name: "Super Spicy chili sauce", price: 0.80)
awesome = Sauce.create(name: "Awesome-sauce", price: 1.00)

cheese1 = Topping.create(name: "Cheddar", price: 1.00)
cheese2 = Topping.create(name: "Swiss", price: 1.00)
cheese3 = Topping.create(name: "Blue cheese", price: 1.00)
avocado = Topping.create(name: "Avocado", price: 1.20)
onion = Topping.create(name: "Caramelized onions", price: 1.20)
bacon = Topping.create(name: "Crispy Bacon", price: 1.00)
egg = Topping.create(name: "Fried Egg", price: 1.00)

fries1 = Side.create(name: "Homemade thick cut fries", price: 2.95)
fries2 = Side.create(name: "Extra crunchy fries", price: 2.50)
fries3 = Side.create(name: "Curly twister fries", price: 3.50)
salad1 = Side.create(name: "Green Salad", price: 2.95)
salad2 = Side.create(name: "Greek Salad", price: 3.25)
drink1 = Side.create(name: "Fritz Kola", price: 3.00)
drink2 = Side.create(name: "Cranberry juice", price: 3.25)
drink3 = Side.create(name: "Water 500ml", price: 4.25)
