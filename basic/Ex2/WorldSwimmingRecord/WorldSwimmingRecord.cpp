#include <iostream>
#include <iomanip>

using namespace std;
int main()
{
	double worldRecord;
	double metersToSwim;
	double timeForAMeter;
	cin >> worldRecord >> metersToSwim >> timeForAMeter;
	
	int lag = metersToSwim / 15;
	double secondsDelay = lag * 12.5;

	double totalTime = timeForAMeter * metersToSwim + secondsDelay;
	cout.setf(ios::fixed);
	if (totalTime < worldRecord) {
			cout << "Yes, he succeeded! The new world record is " <<setprecision(2)<< totalTime << " seconds.";
		}
		else {
			cout << "No, he failed! He was " << setprecision(2) << totalTime - worldRecord  << " seconds slower.";
		}

}
