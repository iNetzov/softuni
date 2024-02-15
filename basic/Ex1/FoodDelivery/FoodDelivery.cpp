#include <iostream>
namespace prices {
    const double CHICKEN_PRICE = 10.35;
    const double DESERT_PERSENT = 20;
    const double FISH_PRICE = 12.40;
    const double VEGIE_PRICE = 8.15;
    const double DEVILERY = 2.50;
}
using namespace prices;
using std::cin;
using std::cout;
int main()
{
    int chickentCount;
    int fishCount;
    int vegieCount;
    cin >> chickentCount >> fishCount >> vegieCount;

    double chickentTotalPrice = chickentCount * CHICKEN_PRICE;
    double fishTotalPrice = fishCount * FISH_PRICE;
    double vegieTotalPrice = vegieCount * VEGIE_PRICE;
    double totalPrice = chickentTotalPrice + fishTotalPrice + vegieTotalPrice;
    double desertTotalPrice = totalPrice * (DESERT_PERSENT/100);
    totalPrice = totalPrice + desertTotalPrice + DEVILERY;
    cout << totalPrice;
}
