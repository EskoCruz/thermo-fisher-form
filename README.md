# thermo-fisher-form


The **Flags Icons Language Switcher** is getting selecting the country and language from the cookie and replacing the flag assets from the digital asset management system (DAM).

Here is the empty flag image holder:

	<li id="location-flag">
		<span class="country-flag">
			<img id="hfCountryHeaderAnonymousImg" class='country-flag-img' src="//www.thermofisher.com/shared-static/images/clear.gif"/>
		</span>
	</li>



"ltCountryInfo" in "shared-static/scripts/headerFooter.js"

	
	this.defaultCookies = function() {
        if (!i("CK_ISO_CODE")) {
            setCookie("CK_ISO_CODE", "us")
        } else {
            if (!i("CK_LANG_CODE")) {
                setCookie("CK_LANG_CODE", "en")
            }
        }
    }
	

https://www.thermofisher.com/apps/lifetech/js/countriesInfo.js
````
+---------------+----------+
| Name			| Value    |
+---------------+----------+
| CK_ISO_CODE	| us       |
| CK_LANG_CODE	| en       |
+---------------+----------+
````
