#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.size() == 0) return 0; // Handle empty array
        
        int j = 0; // Pointer for the position of unique elements
        
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] != nums[j]) { // Found a new unique element
                j++; // Move the unique pointer
                nums[j] = nums[i]; // Place the unique element
            }
        }
        
        return j + 1; // Return the count of unique elements
    }
};

int main() {
    Solution solution;

    // Test array
    vector<int> nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};

    // Call the removeDuplicates function
    int uniqueCount = solution.removeDuplicates(nums);

    // Print the modified array
    cout << "Array after removing duplicates: ";
    for (int i = 0; i < uniqueCount; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;

    // Print the count of unique elements
    cout << "Number of unique elements: " << uniqueCount << endl;

    return 0;
}
