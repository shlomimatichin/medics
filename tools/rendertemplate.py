import django.template.loader
import os
import sys

TEMPLATE_DIRS = [ 'templates', '.' ]
os.environ[ 'DJANGO_SETTINGS_MODULE' ] = '__main__'

content = django.template.loader.render_to_string( sys.argv[ 1 ], {} )
open( sys.argv[ 2 ], "wb" ).write( content.encode( 'utf-8' ) )
