#include <iostream>
using std::cin;
using std::cout;
namespace animalNeeds {
	const double DOG_FOOD_PRICE = 2.5;
	const double CAT_FOOD_PRICE = 4;
}
using namespace animalNeeds;
int main()
{
	int dogFoodBags;
	int catFoodBags;

	cin >> dogFoodBags >> catFoodBags;
	cout << dogFoodBags * DOG_FOOD_PRICE + catFoodBags* CAT_FOOD_PRICE << " lv.";
}
