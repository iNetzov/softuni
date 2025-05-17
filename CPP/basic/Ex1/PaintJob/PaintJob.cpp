#include <iostream>
using namespace std;

int main() {
    // Цени на материалите
    const double price_per_nylon = 1.50;  // лв. за кв. метър
    const double price_per_paint = 14.50;  // лв. за литър
    const double price_per_thinner = 5.00;  // лв. за литър
    const double price_per_bag = 0.40;  // лв. за торбички
    const double labor_percentage = 0.30;  // процент за труда на майсторите

    // Входни данни
    int nylon_sq_meters, paint_liters, thinner_liters, hours;
    cin >> nylon_sq_meters >> paint_liters >> thinner_liters >> hours;

    // Изчисления за материалите
    double total_nylon_sq_meters = nylon_sq_meters + 2;  // добавяме 2 кв. метра
    double total_paint_liters = paint_liters * 1.1;  // добавяме 10%
    double total_bag_cost = price_per_bag;

    // Общи разходи за материали
    double total_material_cost = (total_nylon_sq_meters * price_per_nylon) +
        (total_paint_liters * price_per_paint) +
        (thinner_liters * price_per_thinner) +
        total_bag_cost;

    // Цена за час работа на майсторите
    double hourly_labor_cost = total_material_cost * labor_percentage;

    // Обща цена за ремонта
    double total_cost = total_material_cost + (hourly_labor_cost * hours);

    // Отпечатване на общата цена за ремонта
    cout << total_cost << endl;

    return 0;
}