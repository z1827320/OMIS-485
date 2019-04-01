# display a welcome message
print("The Miles Per Gallon application")
print()

# get input from the user
while(True):
    miles_driven = float(input("Enter miles driven:\t        "))
    gallons_used = float(input("Enter gallons of gas used:\t"))
    cost_per_gallon = float(input("Enter cost per gallon:\t        "))

    if miles_driven <= 0:
        print("\nMiles driven must be greater than zero. Please try again.\n")
    elif gallons_used <= 0:
        print("\nGallons used must be greater than zero. Please try again.\n")
    elif cost_per_gallon <= 0:
        print("\nCost per gallon must be greater than zero. Please try again.\n")
    else:
        # calculate and display miles per gallon
        mpg = miles_driven / gallons_used
        mpg = round(mpg, 2)
        tgc = gallons_used * cost_per_gallon
        tgc = round(tgc, 2)
        cpm = tgc / miles_driven
        cpm = round(cpm, 1)

        print()
        print("Miles Per Gallon:\t\t" + str(mpg))
        print("Total gas cost:\t\t        "  + str(tgc))
        print("Cost Per Mile:\t\t        "   + str(cpm))
        print()

        choice=input("Get entries for another trip (y/n)?")
        print()
        if choice=='n':
            break
print("Bye")