<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <!-- Define the output format -->
  <xsl:output method="html" indent="yes"/>

  <!-- Start of the transformation -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Jokes</title>
      </head>
      <body>
        <h1>Jokes Table</h1>
        <table border="1">
          <tr>
            <th>Category</th>
            <th>Joke</th>
          </tr>
          <!-- Apply the transformation to each joke element -->
          <xsl:apply-templates select="JokesTable/*"/>
        </table>
      </body>
    </html>
  </xsl:template>

  <!-- Define how to transform each joke element -->
  <xsl:template match="JokesTable/*">
    <tr>
      <td><xsl:value-of select="Category"/></td>
      <td><xsl:value-of select="Jokes"/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>
