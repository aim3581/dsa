package slidingwindow

import (
	"fmt"
	"slices"
)

func FindSubstring(s string, words []string) []int {
	if len(words) == 0 || len(s) == 0 {
		return []int{}
	}
	wsize := len(words[0])
	q := []int{}
	result := []int{}
	w := slices.Clone(words)
	for i := 0; i < len(s) && i+wsize <= len(s); {
		substr := s[i : i+wsize]
		if slices.Contains(words, substr) {
			ind := slices.Index(words, substr)
			if slices.Contains(w, substr) {
				j := slices.Index(w, substr)
				w = append(w[:j], w[j+1:]...)
				q = append(q, ind)
			} else if len(q) > 0 {
				w = append(w, words[q[0]])
				q = q[1:]
			}

		} else {
			q = []int{}
			w = slices.Clone(words)
			// fmt.Println(i, i+wsize, string(substr), q, w, words)
			i = i + 1
			continue
		}
		if len(q) == len(words) {
			ind := i - ((len(words) - 1) * wsize)
			w = append(w, words[q[0]])
			q = q[1:]
			w = slices.Clone(words)
			result = append(result, ind)
		}
		fmt.Println(i, i+wsize, string(substr), q, w, words)
		i = i + wsize
	}
	return result
}
