#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int p1 = m - 1; // Pointer for nums1's last valid element
        int p2 = n - 1; // Pointer for nums2's last element
        int p = m + n - 1; // Pointer for the last position in nums1

        // Merge from the back
        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }

        // Copy remaining elements from nums2
        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p2--;
            p--;
        }
    }
};

int main() {
    Solution solution;

    vector<int> nums1 = {1, 2, 3, 0, 0, 0};
    int m = 3;
    vector<int> nums2 = {2, 5, 6};
    int n = 3;

    solution.merge(nums1, m, nums2, n);

    // Print the result
    for (int num : nums1) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
