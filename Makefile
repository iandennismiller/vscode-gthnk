all:
	@echo OK

release: package publish
	@echo OK

package:
	vsce package

publish:
	vsce publish

.PHONY: all release package publish
