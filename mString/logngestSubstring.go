package mstring

import (
	"math"
	"strings"
)

func lengthOfLongestSubstring(s string) int {
	// Initialize left and right pointers of the sliding window and the max length
	l, r, max := 0, 0, 0

	// Iterate over the string with the right pointer
	for r < len(s) {
		// Get the current character
		b := s[r]

		// If the current character is already in the substring (s[l:r]), move the left pointer to the right
		if strings.Contains(s[l:r], string(b)) {
			l++
		} else {
			// If the current character is not in the substring, expand the window to the right and update the max length
			max = int(math.Max(float64(max), float64(r-l+1)))
			r++
		}
	}

	// Return the max length of the substring without repeating characters
	return max
}

func UsingMap(s string) int {
	// Initialize the map to store the last seen positions of characters
	lastSeen := make(map[rune]int)
	max, start := 0, 0

	// Iterate over the string
	for i, c := range s {
		// If the character is already in the map and its position is greater than or equal to the start of the current substring
		if lastPos, ok := lastSeen[c]; ok && lastPos >= start {
			// Move the start of the substring to the right of the repeated character
			start = lastPos + 1
		} else {
			// If the character is not in the substring, update the max length
			max = int(math.Max(float64(max), float64(i-start+1)))
		}

		// Update the last seen position of the character
		lastSeen[c] = i
	}

	// Return the max length of the substring without repeating characters
	return max
}
