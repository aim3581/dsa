package mstring

import (
	"strings"
)

func String(s string) int {
	var (
		l     int
		r     int
		max   int
		total int
	)
	for r < len(s) {
		if l == r {
			max = 1
			r++
			continue
		}
		// fmt.Println("===", r, s[l:r], "====", s[r], "====", strings.Contains(s[l:r], string(s[r])))
		if strings.Contains(s[l:r], string(s[r])) {
			l++
			r = l
			if max > total {
				total = max
			}
		} else {
			r++
			max++
		}
	}
	// fmt.Println(total)
	return total
}
