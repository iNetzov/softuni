#include <iostream>
using namespace std;

int main() {
    // ���� �� �����������
    const double price_per_nylon = 1.50;  // ��. �� ��. �����
    const double price_per_paint = 14.50;  // ��. �� �����
    const double price_per_thinner = 5.00;  // ��. �� �����
    const double price_per_bag = 0.40;  // ��. �� ��������
    const double labor_percentage = 0.30;  // ������� �� ����� �� ����������

    // ������ �����
    int nylon_sq_meters, paint_liters, thinner_liters, hours;
    cin >> nylon_sq_meters >> paint_liters >> thinner_liters >> hours;

    // ���������� �� �����������
    double total_nylon_sq_meters = nylon_sq_meters + 2;  // �������� 2 ��. �����
    double total_paint_liters = paint_liters * 1.1;  // �������� 10%
    double total_bag_cost = price_per_bag;

    // ���� ������� �� ���������
    double total_material_cost = (total_nylon_sq_meters * price_per_nylon) +
        (total_paint_liters * price_per_paint) +
        (thinner_liters * price_per_thinner) +
        total_bag_cost;

    // ���� �� ��� ������ �� ����������
    double hourly_labor_cost = total_material_cost * labor_percentage;

    // ���� ���� �� �������
    double total_cost = total_material_cost + (hourly_labor_cost * hours);

    // ����������� �� ������ ���� �� �������
    cout << total_cost << endl;

    return 0;
}