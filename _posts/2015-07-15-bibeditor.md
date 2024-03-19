---
layout: post
title: A little Bibiliography modifier
date: 2023-12-15 15:09:00
description: Sometimes long author names are hard to manage...
tags: C code bibiliography
categories: 
featured: false
---


Ah... now it's time to add my `.bib` file to the LaTeX... Oops, why is the author name so long?<br>
Have you ever had this situation? It happened to me when I compiled my thesis for the first time in LaTeX.<br>

 For my master's thesis, I had to write a bibliography with over hundred citations. After generating the citations that I realized the bibliography alone took morethan ten pages, and yes even after reducing the font size to the smallest possible.<br><br>

So, what should I do now?
<br><br>
I found out that the lengthiest part in the citations was the author names. Therefore, I decided to reduce them to two or three authors and manually add 'et al.' (which means "and others," an abbreviation of the Latin term 'et alia').<br> Phew... it was tedious to adjust all the hundreds of citations manually. So, I decided to write code in `C` to resolve the problem.<br><br>

It's a simple code that reduces the authors to the given number and appends `et al.` to every list given a `.bib` file.


##### <b>HOW TO  
--------------------------
 - Compile the code using a C compiler <br>
 - Generate the excutable file (eg .exe) <br>
 - Place your .bib file in the same folder. <br>
 * <b>IMPORTANT:  Rename your bib file to `ref.bib`<br>
 - Run the program it will ask you for the number of maximum authors. Give what it asks!<br>
 - Press ENTER, and take a few deep breaths........<br>
 - Your modified .bib will be generated as output.bib<br>
 - Verify for errors.<br>




````




#include <stdio.h>
#include <string.h>
int maxauth;
char *inputf = "ref.bib";      //  input bib file
char *outputf = "output.bib";  // output bib file
FILE *inputFile, *outputFile;
char copyLine[565];
char line[512];

int main() {

 printf("\n");
    printf("                          Welcome to BibEditor                                \n");
    printf("\n\n");

    printf("BibEditor is an experimental program to limit the number of authors in the given .bib file.\n");
    printf("The program will ask you for the number of authors you want to display and simply remove all other\n");
    printf("authors and put an et.al at the tail. Simple :)\n\n");

    printf("¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\n");
    printf("        HOW TO USE\n");
    printf("¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\n\n");

    printf("1) Place your ref.bib file in the same folder.\n\n");

    
    printf("IMPORTANT: [ Rename it to \"ref.bib\" (without quotations) if your .bib file has a different name. ]\n\n");

    printf("2) Run the program it will ask you for the number of maximum authors. Give what it asks! \n\n");

    printf("3) Press ENTER, and take a few deep breaths ;)\n\n");

    printf("4) Your modified .bib will be generated as output.bib\n\n");

    printf("5) Verify for errors.\n\n");
   
    printf("   - Author: SOORAJ NHALOOR\n");
    printf("   - Email: soorajnhaloor123@gmail.com\n");
    printf("   - Website: nhaloorsooraj.github.io\n\n");

    printf("════════════════════════════════════════════════════════════════════════════════\n");
    printf("\n\n");
    printf("\n\n");
    printf("Enter the number of maximum authors : ");
    scanf( "%d",&maxauth);
     printf("\n\n");
    printf("\n\n");
     printf("==============================================================================\n");
     printf("======================  LOGS  ================================================\n");
     printf("==============================================================================\n\n");
    inputFile = fopen(inputf, "r");    
    outputFile = fopen(outputf, "w");  

    if (inputFile == NULL || outputFile == NULL) {
        printf("Error opening files. Please read Readme.txt or see above ^\n");
        return 1;
    } else {
        char pattern[] = "author = {";  
        while (fgets(line, sizeof(line), inputFile)) {
            if (strstr(line, pattern) != NULL) {
                printf("Pattern found in this line: %s", line);
                int commaCount = 0;
                for (int i = 0; i < strlen(line); i++) {
                    if (line[i] == ',') {
                        commaCount++;
                        if (commaCount >= maxauth) {
                            copyLine[i] = line[i];
                        line[i] = '\0';


                            fprintf(outputFile, "%s %s et.al}\n",line,copyLine);
                            break;
                        } /////////////////
                      
                    }
                }
                if (commaCount < maxauth) {
                    fprintf(outputFile,"%s",line);
                }
            } else {
                fprintf(outputFile, "%s", line);  // Write unmodified line to the output file
            }
        }

        fclose(inputFile);
        fclose(outputFile);
    }

    return 0;
}

```
> You can see more here : <https://github.com/nhaloorsooraj/BibEditor> 

