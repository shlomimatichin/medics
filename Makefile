all:	build \
	build/static/images/anamnesistree.png \
	build/index.html \
	build/phtls.html \
	build/meshanenet.html \
	build/anamnesis.html \
	build/documents.html \
	build/instructor.html \
	build/questionspool.html \
	build/anamnesispool.html

everything: clean copystaticfiles all

clean:
	- rm -fr build

build/static/images/anamnesistree.png: static/dot/anamnesis.dot
	- mkdir build
	dot -Tpng -o $@ $<

build:
	make copystaticfiles

copystaticfiles:
	- mkdir build
	rm -fr build/static
	cp -a static build

build/%.html: templates/%.html templates/base.html
	python tools/rendertemplate.py $< $@

backup:
	ls | grep -v build | xargs tar -czf /tmp/madabackup.tgz 
