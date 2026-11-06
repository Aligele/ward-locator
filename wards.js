// All 1,450 wards in Kenya. Format: #County, @Constituency, then code|ward|lat|lng|survey GPS radius in units of 100 m.
window.WARD_DATA = `
#Baringo
@Baringo Central
793|Kabarnet|0.5198|35.6841|124
794|Sacho|0.3884|35.7460|109
795|Tenges|0.2917|35.7519|94
796|Ewalel Chapchap|0.4694|35.8179|162
797|Kapropita|0.4572|35.7324|108
@Baringo North
788|Barwessa|0.7213|35.6781|241
789|Kabartonjo|0.7699|35.8085|365
790|Saimo/Kipsaraman|0.6942|35.8107|112
791|Saimo/Soi|0.7039|35.9187|178
792|Bartabwa|0.8842|35.7942|224
@Baringo South
798|Marigat|0.4468|35.9135|263
799|Ilchamus|0.5767|36.0562|206
800|Mochongoi|0.3419|36.1466|226
801|Mukutani|0.5464|36.1804|204
@Eldama Ravine
805|Lembus|0.0160|35.9049|109
806|Lembus Kwen|0.1145|35.6657|149
807|Ravine|0.0231|35.7261|52
808|Mumberes/Maji Mazuri|-0.0398|35.6724|209
809|Lembus/Perkerra|0.0840|35.7906|112
810|Koibatek|-0.0504|35.7923|163
@Mogotio
802|Mogotio|0.1610|35.8211|167
803|Emining|0.2345|35.9534|226
804|Kisanana|0.1560|36.0818|229
@Tiaty
781|Tirioko|1.3753|35.8618|364
782|Kolowa|1.1356|35.7786|254
783|Ribkwo|1.0407|35.9496|251
784|Silale|1.0594|36.1616|197
785|Loiyamorock|0.9021|36.0850|253
786|Tangulbei/Korossi|0.8228|36.2062|263
787|Churo/Amaya|0.7770|36.3549|214
#Bomet
@Bomet Central
981|Silibwet Township|-0.7410|35.3493|68
982|Ndaraweta|-0.6817|35.3791|82
983|Singorwet|-0.7120|35.3389|91
984|Chesoen|-0.6869|35.2878|83
985|Mutarakwa|-0.7603|35.2606|74
@Bomet East
976|Merigi|-0.7605|35.4100|108
977|Kembu|-0.8032|35.4275|73
978|Longisa|-0.8482|35.4064|89
979|Kipreres|-0.9150|35.3800|76
980|Chemaner|-0.8038|35.4923|73
@Chepalungu
971|Kong'asis|-0.8368|35.2334|94
972|Nyangores|-0.8228|35.3169|101
973|Sigor|-0.9335|35.2967|105
974|Chebunyo|-0.9610|35.2017|126
975|Siongiroi|-0.8846|35.1944|97
@Konoin
986|Chepchabas|-0.4693|35.2543|95
987|Kimulot|-0.4733|35.3888|238
988|Mogogosiek|-0.6175|35.2862|86
989|Boito|-0.5291|35.3383|219
990|Embomos|-0.5611|35.4451|209
@Sotik
966|Ndanai/Abosi|-0.8629|35.0890|93
967|Chemagel|-0.6854|35.1324|78
968|Kipsonoi|-0.7624|35.1773|117
969|Kapletundo|-0.6693|35.2099|83
970|Rongena/Manaret|-0.7128|35.0871|141
#Bungoma
@Bumula
1089|South Bukusu|0.5399|34.4881|70
1090|Bumula|0.5377|34.4354|81
1091|Khasoko|0.4898|34.4213|44
1092|Kabula|0.4872|34.5239|53
1093|Kimaeti|0.6098|34.4046|83
1094|West Bukusu|0.6040|34.4777|74
1095|Siboti|0.6559|34.4647|61
@Kabuchai
1085|Kabuchai/Chwele|0.7128|34.5748|69
1086|West Nalondo|0.6364|34.5767|63
1087|Bwake/Luuya|0.6671|34.6287|79
1088|Mukuyuni|0.7655|34.6212|61
@Kanduyi
1096|Bukembe West|0.5849|34.6068|51
1097|Bukembe East|0.5865|34.6605|73
1098|Township|0.5770|34.5556|18
1099|Khalaba|0.5739|34.5651|45
1100|Musikoma|0.5532|34.5351|66
1101|East Sang'alo|0.5002|34.6303|101
1102|Marakaru/Tuuti|0.6489|34.5264|72
1103|Sang'alo West|0.5188|34.5858|71
@Kimilili
1111|Kimilili|0.7598|34.7281|58
1112|Kibingei|0.7825|34.6779|69
1113|Maeni|0.8081|34.7472|71
1114|Kamukuywa|0.8084|34.7875|67
@Mt.Elgon
1076|Cheptais|0.9109|34.4710|244
1077|Chesikaki|0.9074|34.5088|240
1078|Chepyuk|0.9391|34.5611|200
1079|Kapkateny|0.9445|34.6089|200
1080|Kaptama|0.9818|34.6893|240
1081|Elgon|0.9227|34.6569|242
@Sirisia
1082|Namwela|0.7608|34.5433|70
1083|Malakisi/South Kulisiru|0.7308|34.4848|112
1084|Lwandanyi|0.7635|34.4273|98
@Tongaren
1115|Mbakalo|0.7152|34.8575|71
1116|Naitiri/Kabuyefwe|0.7718|34.9030|96
1117|Milima|0.7814|34.8450|67
1118|Ndalu/ Tabani|0.8551|34.9757|81
1119|Tongaren|0.7982|34.9608|66
1120|Soysambu/ Mitua|0.7875|35.0267|59
@Webuye East
1104|Mihuu|0.6515|34.7894|74
1105|Ndivisi|0.7158|34.7956|77
1106|Maraka|0.5872|34.7598|55
@Webuye West
1107|Misikhu|0.6996|34.7217|65
1108|Sitikho|0.5393|34.6977|123
1109|Matulo|0.6235|34.7315|51
1110|Bokoli|0.6821|34.6766|93
#Busia
@Budalangi
1152|Bunyala Central|0.0782|34.0411|65
1153|Bunyala North|0.1427|34.0283|93
1154|Bunyala West|0.1141|33.9572|69
1155|Bunyala South|0.0295|33.9853|89
@Butula
1142|Marachi West|0.3118|34.2073|57
1143|Kingandole|0.3635|34.2334|52
1144|Marachi Central|0.3502|34.2697|66
1145|Marachi East|0.3349|34.3378|64
1146|Marachi North|0.3858|34.3657|68
1147|Elugulu|0.3880|34.3118|47
@Funyula
1148|Namboboto Nambuku|0.3246|34.1071|90
1149|Nangina|0.2831|34.1127|89
1150|Ageng'a Nanguba|0.2351|34.0597|90
1151|Bwiri|0.1832|34.0441|94
@Matayos
1137|Bukhayo West|0.4234|34.1488|87
1138|Mayenje|0.4338|34.1034|37
1139|Matayos South|0.3722|34.1893|96
1140|Busibwabo|0.4313|34.2010|81
1141|Burumba|0.4574|34.1131|32
@Nambale
1133|Nambale Township|0.4693|34.2553|71
1134|Bukhayo North/Waltsi|0.5540|34.3628|109
1135|Bukhayo East|0.4897|34.3536|76
1136|Bukhayo Central|0.4339|34.3018|88
@Teso North
1121|Malaba Central|0.6368|34.2887|86
1122|Malaba North|0.6637|34.3177|70
1123|Ang'urai South|0.6830|34.3672|79
1124|Ang'urai North|0.7376|34.3429|67
1125|Ang'urai East|0.7419|34.3968|51
1126|Malaba South|0.6169|34.3124|90
@Teso South
1127|Ang'orom|0.4847|34.1294|44
1128|Chakol South|0.5176|34.1637|90
1129|Chakol North|0.5642|34.1855|63
1130|Amukura West|0.5994|34.2172|59
1131|Amukura East|0.5568|34.3009|84
1132|Amukura Central|0.5345|34.2471|65
#Elgeyo-Marakwet
@Keiyo North
741|Emsoo|0.7968|35.5867|104
742|Kamariny|0.6322|35.4775|125
743|Kapchemutwa|0.7723|35.5138|126
744|Tambach|0.6503|35.5624|145
@Keiyo South
745|Kaptarakwa|0.4619|35.5172|117
746|Chepkorio|0.3656|35.5325|83
747|Soy North|0.4729|35.5942|151
748|Soy South|0.2917|35.6545|126
749|Kabiemit|0.2651|35.5485|104
750|Metkei|0.1976|35.6117|116
@Marakwet East
731|Kapyego|1.1586|35.4995|160
732|Sambirir|1.1089|35.5777|215
733|Endo|1.2119|35.6613|143
734|Embobut / Embulot|1.1345|35.5893|257
@Marakwet West
735|Lelan|1.0234|35.4148|250
736|Sengwer|1.1152|35.2658|170
737|Cherang'any/Chebororwa|0.9836|35.3869|116
738|Moiben/Kuserwo|0.9336|35.4918|113
739|Kapsowar|0.9499|35.5671|102
740|Arror|0.9437|35.6107|104
#Embu
@Manyatta
311|Ruguru/Ngandori|-0.2532|37.3927|276
312|Kithimu|-0.5074|37.5351|77
313|Nginda|-0.3322|37.4097|249
314|Mbeti North|-0.5353|37.4955|87
315|Kirimari|-0.5030|37.4467|57
316|Gaturi South|-0.4731|37.5039|55
@Mbeere North
328|Nthawa|-0.5670|37.6214|101
329|Muminji|-0.6099|37.7722|177
330|Evurore|-0.4890|37.8137|191
@Mbeere South
323|Mwea|-0.7987|37.3768|131
324|Makima|-0.8102|37.5368|160
325|Mbeti South|-0.6557|37.5455|137
326|Mavuria|-0.7314|37.6852|164
327|Kiambere|-0.7191|37.8234|129
@Runyenjes
317|Gaturi North|-0.4285|37.5117|56
318|Kagaari South|-0.4884|37.6118|91
319|Central Ward|-0.4290|37.5725|72
320|Kagaari North|-0.3261|37.4750|288
321|Kyeni North|-0.3393|37.5279|343
322|Kyeni South|-0.4467|37.6496|93
#Garissa
@Balambala
135|Balambala|0.1826|39.2369|305
136|Danyere|0.1252|38.8177|308
137|Jara Jara|0.1845|38.9541|250
138|Saka|-0.0060|39.2542|203
139|Sankuri|-0.1647|39.5980|293
@Dadaab
146|Dertu|0.0258|39.7696|377
147|Dadaab|0.0555|40.2828|125
148|Labasigale|0.1818|40.2055|190
149|Damajale|-0.0573|40.7306|551
150|Liboi|0.2381|40.7913|511
151|Abakaile|0.1675|40.0123|357
@Fafi
152|Bura|-1.1532|40.3578|566
153|Dekaharia|-1.0586|40.8213|296
154|Jarajila|-0.4484|40.6706|691
155|Fafi|-0.4091|40.2625|896
156|Nanighi|-0.6849|40.0878|347
@Garissa Township
131|Waberi|-0.3622|39.7438|157
132|Galbet|-0.4060|39.6552|68
133|Township|-0.4503|39.6414|11
134|Iftin|-0.4541|39.7892|196
@Ijara
157|Hulugho|-1.3527|41.1622|672
158|Sangailu|-1.5303|40.8832|378
159|Ijara|-1.6754|40.5670|516
160|Masalani|-1.7168|40.2662|439
@Lagdera
140|Modogashe|0.6012|39.1245|385
141|Benane|0.4283|38.8512|244
142|Goreale|0.3176|39.5996|409
143|Maalimin|0.5365|39.2457|425
144|Sabena|0.7792|39.4799|312
145|Baraki|0.5317|39.6128|123
#Homa Bay
@Homa Bay Town
1241|Homa Bay Central|-0.5215|34.4672|206
1242|Homa Bay Arujo|-0.5429|34.4494|140
1243|Homa Bay West|-0.5878|34.4466|89
1244|Homa Bay East|-0.5341|34.4879|233
@Kabondo Kasipul
1226|Kabondo East|-0.4200|34.9418|97
1227|Kabondo West|-0.4234|34.8629|102
1228|Kokwanyo/Kakelo|-0.4433|34.8009|95
1229|Kojwach|-0.4840|34.8438|59
@Karachuonyo
1230|West Karachuonyo|-0.3816|34.4705|128
1231|North Karachuonyo|-0.3661|34.6533|128
1232|Central|-0.3403|34.6094|125
1233|Kanyaluo|-0.4407|34.6249|60
1234|Kibiri|-0.4234|34.5599|48
1235|Wangchieng|-0.3346|34.7286|116
1236|Kendu Bay Town|-0.3275|34.6630|97
@Kasipul
1221|West Kasipul|-0.5391|34.6700|82
1222|South Kasipul|-0.5186|34.7211|102
1223|Central Kasipul|-0.4462|34.7040|60
1224|East Kamagak|-0.4670|34.7689|75
1225|West Kamagak|-0.4913|34.7394|62
@Ndhiwa
1245|Kwabwai|-0.7667|34.2723|131
1246|Kanyadoto|-0.7839|34.3423|88
1247|Kanyikela|-0.7866|34.3775|66
1248|North Kabuoch|-0.7148|34.4801|111
1249|Kabuoch South/Pala|-0.8059|34.4352|71
1250|Kanyamwa Kologi|-0.6314|34.4096|118
1251|Kanyamwa Kosewe|-0.6959|34.3566|128
@Rangwe
1237|West Gem|-0.6127|34.5807|84
1238|East Gem|-0.5855|34.6094|74
1239|Kagan|-0.5093|34.6027|99
1240|Kochia|-0.4850|34.5104|208
@Suba North
1252|Mfangano Island|-0.4355|34.0096|155
1253|Rusinga Island|-0.3843|34.1511|140
1254|Kasgunga|-0.4481|34.2309|97
1255|Gembe|-0.4703|34.3198|136
1256|Lambwe|-0.5531|34.3573|156
@Suba South
1257|Gwassi South|-0.7220|34.1064|231
1258|Gwassi North|-0.6800|34.0174|167
1259|Kaksingri West|-0.5601|34.0721|193
1260|Ruma Kaksingri East|-0.6087|34.2497|133
#Isiolo
@Isiolo North
241|Wabera|0.3672|37.5891|49
242|Bulla Pesa|0.3432|37.5693|24
243|Chari|1.1249|38.2628|453
244|Cherab|1.5230|38.8596|934
245|Ngare Mara|0.6426|37.8348|344
246|Burat|0.4384|37.4758|229
247|Oldonyiro|0.6405|37.1338|325
@Isiolo South
248|Garbatulla|0.4899|38.5611|698
249|Kinna|0.4282|38.2867|636
250|Sericho|0.9019|38.9796|601
#Kajiado
@Kajiado Central
916|Purko|-2.0270|36.7602|151
917|Ildamat|-1.8573|36.7326|155
918|Dalalekutuk|-1.9605|36.9267|304
919|Matapato North|-2.1962|36.8265|444
920|Matapato South|-2.4028|36.7724|437
@Kajiado East
921|Kaputiei North|-1.6860|36.9455|258
922|Kitengela|-1.4361|36.8216|122
923|Oloosirkon/Sholinke|-1.5213|36.8495|177
924|Kenyawa-Poka|-2.2062|37.4470|349
925|Imaroro|-1.9416|37.1240|349
@Kajiado North
911|Olkeri|-1.3956|36.7037|138
912|Ongata Rongai|-1.3961|36.7559|36
913|Nkaimurunya|-1.3785|36.7311|55
914|Oloolua|-1.3413|36.6719|58
915|Ngong|-1.3414|36.6551|35
@Kajiado South
931|Entonet/Lenkisim|-2.5747|37.2177|486
932|Mbirikani/Eselenkei|-2.4942|37.5332|587
933|Kuku|-2.8299|37.7437|333
934|Rombo|-3.0498|37.7270|276
935|Kimana|-2.7874|37.4829|172
@Kajiado West
926|Keekonyokie|-1.6008|36.5813|376
927|Iloodokilani|-1.9799|36.4951|442
928|Magadi|-1.9088|36.2099|399
929|Ewuaso Oonkidong'i|-1.3395|36.3946|441
930|Mosiro|-1.5546|36.1829|156
#Kakamega
@Butere
1032|Marama West|0.2494|34.5673|77
1033|Marama Central|0.2570|34.4984|69
1034|Marenyo - Shianda|0.1894|34.5164|55
1035|Marama North|0.2117|34.5802|51
1036|Marama South|0.1837|34.4581|51
@Ikolomani
1047|Idakho South|0.1577|34.7026|43
1048|Idakho East|0.1736|34.7619|67
1049|Idakho North|0.2340|34.6778|56
1050|Idakho Central|0.1973|34.6880|64
@Khwisero
1037|Kisa North|0.1735|34.6275|57
1038|Kisa East|0.1438|34.6327|70
1039|Kisa West|0.1379|34.4980|50
1040|Kisa Central|0.1527|34.5615|81
@Likuyani
997|Likuyani|0.6868|35.0996|95
998|Sango|0.7536|35.0813|71
999|Kongoni|0.7798|35.1251|67
1000|Nzoia|0.8293|35.0751|61
1001|Sinoko|0.8752|35.0633|65
@Lugari
991|Mautuma|0.7260|35.0039|96
992|Lugari|0.6809|34.9228|105
993|Lumakanda|0.6513|34.9898|75
994|Chekalini|0.6304|34.9032|83
995|Chevaywa|0.5318|34.7571|97
996|Lwandeti|0.6126|34.8446|60
@Lurambi
1009|Butsotso East|0.3328|34.7489|56
1010|Butsotso South|0.2391|34.6248|62
1011|Butsotso Central|0.2837|34.6755|63
1012|Sheywe|0.3056|34.7512|57
1013|Mahiakalo|0.3014|34.7764|36
1014|Shirere|0.2705|34.7431|46
@Malava
1002|West Kabras|0.4227|34.7552|65
1003|Chemuche|0.4440|34.8882|95
1004|East Kabras|0.4041|34.9038|74
1005|Butali/Chegulo|0.5011|34.8211|82
1006|Manda-Shivanga|0.5405|34.8600|89
1007|Shirugu-Mugai|0.4615|34.7955|82
1008|South Kabras|0.3819|34.8082|65
@Matungu
1027|Koyonzo|0.3648|34.4077|102
1028|Kholera|0.4349|34.4986|74
1029|Khalaba|0.4288|34.5546|71
1030|Mayoni|0.3828|34.4597|72
1031|Namamali|0.4456|34.4051|75
@Mumias East
1024|Lubinu/Lusheya|0.3063|34.5349|66
1025|Isongo/Makunga/Malaha|0.3229|34.6092|77
1026|East Wanga|0.3596|34.5574|81
@Mumias West
1020|Mumias Central|0.3331|34.4589|62
1021|Mumias North|0.3551|34.4947|43
1022|Etenje|0.2800|34.4307|69
1023|Musanda|0.2289|34.4349|79
@Navakholo
1015|Ingostse-Mathia|0.3645|34.7317|60
1016|Shinoyi-Shikomari-Esumeyia|0.3325|34.6713|67
1017|Bunyala West|0.4099|34.6237|70
1018|Bunyala East|0.4594|34.7062|57
1019|Bunyala Central|0.4084|34.6836|73
@Shinyalu
1041|Isukha North|0.3526|34.8692|102
1042|Murhanda|0.2836|34.8218|75
1043|Isukha Central|0.2382|34.8513|89
1044|Isukha South|0.2131|34.7815|73
1045|Isukha East|0.2823|34.9223|116
1046|Isukha West|0.2368|34.7372|42
#Kericho
@Ainamoi
944|Kapsoit|-0.2863|35.2157|76
945|Ainamoi|-0.2672|35.2824|74
946|Kapkugerwet|-0.3358|35.3038|43
947|Kipchebor|-0.3714|35.2650|48
948|Kipchimchim|-0.3227|35.2723|50
949|Kapsaos|-0.2797|35.3469|88
@Belgut
957|Waldai|-0.3511|35.1713|73
958|Kabianga|-0.4249|35.1313|75
959|Cheptororiet/Seretut|-0.4151|35.1950|58
960|Chaik|-0.4193|35.3471|227
961|Kapsuser|-0.3544|35.2221|54
@Bureti
950|Kisiara|-0.4846|35.1097|69
951|Tebesonik|-0.5444|35.0815|89
952|Cheboin|-0.5606|35.1280|57
953|Chemosot|-0.5110|35.1703|73
954|Litein|-0.5914|35.1568|75
955|Cheplanget|-0.6223|35.0976|77
956|Kapkatet|-0.6170|35.1900|61
@Kipkelion East
936|Londiani|-0.1221|35.5529|107
937|Kedowa/Kimugul|-0.2166|35.5782|134
938|Chepseon|-0.2890|35.4043|125
939|Tendeno/Sorget|-0.0365|35.5154|149
@Kipkelion West
940|Kunyak|-0.1218|35.2942|84
941|Kamasian|-0.1251|35.4317|86
942|Kipkelion|-0.1590|35.4678|132
943|Chilchila|-0.1608|35.3658|102
@Sigowet/Soin
962|Sigowet|-0.4238|35.0668|90
963|Kaplelartet|-0.3524|35.0640|98
964|Soliat|-0.2913|35.1146|101
965|Soin|-0.2133|35.1569|127
#Kiambu
@Gatundu North
555|Gituamba|-0.878|36.823|140
556|Githobokoni|-0.882|36.773|182
557|Chania|-0.950|36.924|73
558|Mang'u|-0.986|36.935|59
@Gatundu South
551|Kiamwangi|-1.026|36.872|56
552|Kiganjo|-0.972|36.798|103
553|Ndarugu|-0.909|36.761|146
554|Ngenda|-1.005|36.895|106
@Githunguri
577|Githunguri|-1.060|36.780|62
578|Githiga|-1.069|36.723|58
579|Ikinu|-1.103|36.804|63
580|Ngewa|-1.074|36.837|64
581|Komothai|-1.034|36.836|101
@Juja
559|Murera|-1.127|36.982|220
560|Theta|-1.080|36.950|71
561|Juja|-1.070|36.986|73
562|Witeithie|-1.041|37.005|71
563|Kalimoni|-1.131|37.094|116
@Kabete
591|Gitaru|-1.228|36.692|42
592|Muguga|-1.200|36.675|46
593|Nyadhuna|-1.195|36.708|60
594|Kabete|-1.223|36.725|33
595|Uthiru|-1.248|36.715|15
@Kiambaa
586|Cianda|-1.131|36.763|63
587|Karuri|-1.166|36.751|31
588|Ndenderu|-1.192|36.745|54
589|Muchatha|-1.180|36.778|31
590|Kihara|-1.210|36.766|23
@Kiambu
582|Ting'ang'a|-1.137|36.855|70
583|Ndumberi|-1.158|36.800|38
584|Riabai|-1.159|36.835|31
585|Township (Kiambu)|-1.186|36.842|67
@Kikuyu
596|Karai|-1.271|36.646|58
597|Nachu|-1.247|36.580|106
598|Sigona|-1.183|36.636|65
599|Kikuyu|-1.250|36.661|47
600|Kinoo|-1.247|36.691|21
@Lari
606|Kinale|-0.872|36.655|141
607|Kijabe|-0.958|36.645|79
608|Nyanduma|-0.986|36.735|95
609|Kamburu|-1.023|36.742|78
610|Lari/Kirenga|-1.025|36.638|76
@Limuru
601|Bibirioni|-1.078|36.624|39
602|Limuru Central|-1.123|36.627|57
603|Ndeiya|-1.162|36.572|125
604|Limuru East|-1.100|36.689|79
605|Ngecha Tigoni|-1.150|36.684|66
@Ruiru
569|Gitothua|-1.144|36.929|54
570|Biashara|-1.114|36.906|47
571|Gatongora|-1.194|37.020|112
572|Kahawa Sukari|-1.194|37.020|112
573|Kahawa Wendani|-1.194|37.020|112
574|Kiuu|-1.199|37.031|151
575|Mwiki|-1.194|37.020|112
576|Mwihoko|-1.194|37.020|112
@Thika Town
564|Township (Thika Town)|-1.016|37.022|69
565|Kamenu|-1.063|37.098|65
566|Hospital|-1.057|37.136|78
567|Gatuanyaga|-1.075|37.179|110
568|Ngoliba|-1.059|37.290|93
#Kilifi
@Ganze
71|Ganze|-3.459|39.620|287
72|Bamba|-3.500|39.351|336
73|Jaribuni|-3.612|39.681|147
74|Sokoke|-3.319|39.657|263
@Kaloleni
63|Mariakani|-3.834|39.471|129
64|Kayafungo|-3.752|39.433|221
65|Kaloleni|-3.786|39.630|114
66|Mwanamwinga|-3.697|39.556|138
@Kilifi North
51|Tezo|-3.544|39.880|84
52|Sokoni|-3.623|39.860|21
53|Kibarani|-3.563|39.818|85
54|Dabaso|-3.293|39.975|110
55|Matsangoni|-3.412|39.872|157
56|Watamu|-3.306|40.055|84
57|Mnarani|-3.685|39.819|132
@Kilifi South
58|Junju|-3.825|39.775|104
59|Mwarakaya|-3.792|39.717|104
60|Shimo la Tewa|-3.932|39.730|69
61|Chasimba|-3.720|39.726|105
62|Mtepeni|-3.894|39.753|78
@Magarini
80|Marafa|-2.992|39.878|371
81|Magarini|-3.119|40.094|55
82|Gongoni|-2.974|40.118|144
83|Adu|-2.863|39.676|834
84|Garashi|-3.092|39.888|219
85|Sabaki|-3.174|40.106|44
@Malindi
75|Jilore|-3.213|39.829|202
76|Kakuyuni|-3.197|39.987|113
77|Ganda|-3.242|40.066|80
78|Malindi Town|-3.215|40.088|43
79|Shella|-3.235|40.118|37
@Rabai
67|Mwawesa|-3.926|39.618|55
68|Ruruma|-3.874|39.588|56
69|Kambe/Ribe|-3.881|39.658|65
70|Rabai/Kisurutini|-3.940|39.560|66
#Kirinyaga
@Gichugu
504|Kabare|-0.394|37.308|291
505|Baragwi|-0.499|37.346|69
506|Njukiini|-0.509|37.401|66
507|Ngariama|-0.359|37.378|263
508|Karumandi|-0.356|37.339|249
@Kirinyaga Central
512|Mutira|-0.377|37.248|280
513|Kanyeki-Ini|-0.550|37.276|67
514|Kerugoya|-0.495|37.285|56
515|Inoi|-0.380|37.271|278
@Mwea
496|Mutithi|-0.697|37.281|104
497|Kangai|-0.614|37.298|70
498|Thiba|-0.676|37.328|51
499|Wamumu|-0.735|37.377|111
500|Nyangati|-0.590|37.348|69
501|Murinduko|-0.615|37.435|122
502|Gathigiriri|-0.658|37.391|58
503|Tebere|-0.674|37.366|166
@Ndia
509|Mukure|-0.370|37.227|279
510|Kiine|-0.551|37.204|141
511|Kariti|-0.612|37.192|122
#Kisii
@Bobasi
1315|Masige West|-0.833|34.771|62
1316|Masige East|-0.824|34.793|60
1317|Bobasi Central|-0.830|34.841|50
1318|Nyacheki|-0.881|34.877|61
1319|Bobasi Bogetaorio|-0.890|34.829|83
1320|Bobasi Chache|-0.733|34.743|48
1321|Sameta/Mokwerero|-0.774|34.755|48
1322|Bobasi Boitangare|-0.786|34.799|50
@Bomachoge Borabu
1311|Bombaba Borabu|-0.891|34.777|62
1312|Boochi Borabu|-0.908|34.808|37
1313|Bokimonge|-0.906|34.751|72
1314|Magenche|-0.921|34.714|49
@Bomachoge Chache
1323|Majoge Basi|-0.743|34.700|47
1324|Boochi/Tendere|-0.799|34.719|79
1325|Bosoti/Sengera|-0.849|34.708|55
@Bonchari
1301|Bomariba|-0.624|34.694|50
1302|Bogiakumu|-0.666|34.728|49
1303|Bomorenda|-0.690|34.705|49
1304|Riana|-0.662|34.661|75
@Kitutu Chache North
1337|Monyerero|-0.567|34.856|65
1338|Sensi|-0.566|34.810|69
1339|Marani|-0.570|34.776|50
1340|Kegogi|-0.527|34.840|49
@Kitutu Chache South
1341|Bogusero|-0.582|34.722|50
1342|Bogeka|-0.604|34.749|44
1343|Nyakoe|-0.622|34.761|53
1344|Kitutu Central|-0.656|34.764|34
1345|Nyatieko|-0.638|34.793|39
@Nyaribari Chache
1331|Bobaracho|-0.704|34.805|49
1332|Kisii Central|-0.692|34.763|42
1333|Keumbu|-0.734|34.846|39
1334|Kiogoro|-0.737|34.788|49
1335|Birongo|-0.758|34.879|51
1336|Ibeno|-0.773|34.840|62
@Nyaribari Masaba
1326|Ichuni|-0.783|34.919|47
1327|Nyamasibi|-0.838|34.974|71
1328|Masimba|-0.860|34.951|62
1329|Gesusu|-0.862|34.905|90
1330|Kiamokama|-0.818|34.905|49
@South Mugirango
1305|Tabaka|-0.734|34.655|56
1306|Boikang'a|-0.817|34.663|47
1307|Bogetenga|-0.785|34.647|67
1308|Borabu / Chitago|-0.905|34.680|89
1309|Moticho|-0.889|34.635|87
1310|Getenga|-0.928|34.659|63
#Kisumu
@Kisumu Central
1196|Railways|-0.069|34.757|44
1197|Migosi|-0.070|34.778|11
1198|Shaurimoyo Kaloleni|-0.091|34.767|19
1199|Market Milimani|-0.124|34.725|99
1200|Kondele|-0.084|34.780|14
1201|Nyalenda B|-0.142|34.732|91
@Kisumu East
1186|Kajulu|-0.026|34.791|81
1187|Kolwa East|-0.125|34.834|207
1188|Manyatta 'b'|-0.086|34.788|28
1189|Nyalenda 'a'|-0.111|34.773|17
1190|Kolwa Central|-0.126|34.774|143
@Kisumu West
1191|South West Kisumu|-0.131|34.632|95
1192|Central Kisumu|-0.095|34.702|113
1193|Kisumu North|-0.032|34.724|51
1194|West Kisumu|-0.051|34.667|107
1195|North West Kisumu|-0.017|34.617|49
@Muhoroni
1211|Miwani|-0.045|34.925|166
1212|Ombeyi|-0.105|34.925|82
1213|Masogo/Nyang'oma|-0.112|35.047|109
1214|Chemelil|-0.070|35.153|114
1215|Muhoroni/Koru|-0.171|35.253|137
@Nyakach
1216|South West Nyakach|-0.377|34.911|87
1217|North Nyakach|-0.273|34.966|106
1218|Central Nyakach|-0.310|34.916|148
1219|West Nyakach|-0.315|34.813|147
1220|South East Nyakach|-0.365|34.974|59
@Nyando
1206|East Kano/Wawidhi|-0.223|35.000|104
1207|Awasi/Onjiko|-0.174|35.065|83
1208|Ahero|-0.186|34.937|123
1209|Kabonyo/Kanyagwal|-0.235|34.781|296
1210|Kobura|-0.186|34.764|289
@Seme
1202|West Seme|-0.184|34.485|159
1203|Central Seme|-0.162|34.548|142
1204|East Seme|-0.095|34.564|109
1205|North Seme|-0.049|34.502|88
#Kitui
@Kitui Central
354|Miambani|-1.255|38.113|144
355|Township|-1.365|38.007|41
356|Kyangwithya West|-1.420|37.924|191
357|Mulango|-1.502|37.962|162
358|Kyangwithya East|-1.328|38.052|89
@Kitui East
359|Zombe/Mwitika|-1.465|38.371|333
360|Chuluni|-1.466|38.138|167
361|Nzambani|-1.423|38.064|101
362|Voo/Kyamatu|-1.627|38.338|288
363|Endau/Malalani|-1.271|38.711|395
364|Mutito/Kaliku|-1.268|38.297|214
@Kitui Rural
350|Kisasi|-1.586|37.987|147
351|Mbitini|-1.544|38.088|134
352|Kwavonza/Yatta|-1.348|37.769|367
353|Kanyangi|-1.774|37.930|217
@Kitui South
365|Ikanga/Kyatune|-1.725|38.082|180
366|Mutomo|-1.826|38.186|182
367|Mutha|-1.846|38.706|610
368|Ikutha|-2.215|38.365|473
369|Kanziko|-2.115|38.452|400
370|Athi|-2.585|38.501|1083
@Kitui West
346|Mutonguni|-1.189|37.983|166
347|Kauwi|-1.200|37.847|118
348|Matinyani|-1.299|37.980|97
349|Kwa Mutonga/Kithumula|-1.294|37.890|130
@Mwingi Central
340|Central|-0.980|38.093|92
341|Kivou|-0.918|38.128|143
342|Nguni|-0.860|38.609|522
343|Nuu|-1.038|38.443|308
344|Mui|-1.033|38.228|246
345|Waita|-0.803|38.146|194
@Mwingi North
331|Ngomeni|-0.564|38.523|344
332|Kyuso|-0.540|38.208|262
333|Mumoni|-0.592|38.001|218
334|Tseikuru|-0.257|38.343|260
335|Tharaka|-0.365|38.056|163
@Mwingi West
336|Kyome/Thaana|-0.974|37.933|217
337|Nguutani|-1.094|37.920|252
338|Migwani|-1.084|38.077|152
339|Kiomo/Kyethani|-0.866|37.972|181
#Kwale
@Kinango
44|Nadavaya|-4.197|38.947|588
45|Puma|-4.071|38.950|594
46|Kinango|-4.086|39.419|198
47|Mackinnon-Road|-3.803|39.125|330
48|Chengoni/Samburu|-3.770|39.272|247
49|Mwavumbo|-3.894|39.408|154
50|Kasemeni|-3.945|39.240|628
@Lungalunga
35|Pongwekikoneni|-4.533|39.328|183
36|Dzombo|-4.452|39.219|128
37|Mwereni|-4.353|38.960|428
38|Vanga|-4.563|39.137|200
@Matuga
39|Tsimba Golini|-4.188|39.492|163
40|Waa|-4.149|39.599|78
41|Tiwi|-4.219|39.579|60
42|Kubo South|-4.353|39.348|173
43|Mkongani|-4.268|39.384|277
@Msambweni
31|Gombatobongwe|-4.284|39.543|105
32|Ukunda|-4.312|39.554|50
33|Kinondo|-4.377|39.493|94
34|Ramisi|-4.460|39.413|154
#Laikipia
@Laikipia East
817|Ngobit|-0.013|36.710|209
818|Tigithi|-0.084|36.903|264
819|Thingithu|0.032|37.022|85
820|Nanyuki|0.032|37.087|80
821|Umande|0.197|37.144|199
@Laikipia North
822|Sosian|0.615|36.658|420
823|Segera|0.262|36.929|331
824|Mukogondo West|0.496|37.029|215
825|Mukogondo East|0.345|37.255|340
@Laikipia West
811|Olmoran|0.579|36.419|241
812|Rumuruti Township|0.303|36.484|164
813|Kinamba|-0.075|36.769|338
814|Marmanet|0.274|36.372|199
815|Igwamiti|0.117|36.332|178
816|Salama|0.242|36.655|352
#Lamu
@Lamu East
101|Faza|-2.118|41.015|73
102|Kiunga|-1.787|41.331|303
103|Basuba|-1.845|40.995|345
@Lamu West
104|Shella|-2.270|40.949|337
105|Mkomani|-2.286|40.860|80
106|Hindi|-2.033|40.737|312
107|Mkunumbi|-2.139|40.565|353
108|Hongwe|-2.389|40.615|116
109|Witu|-2.223|40.368|301
110|Bahari|-2.408|40.730|132
#Machakos
@Kangundo
381|Kangundo North|-1.297|37.382|72
382|Kangundo Central|-1.312|37.346|46
383|Kangundo East|-1.364|37.381|59
384|Kangundo West|-1.363|37.326|85
@Kathiani
390|Mitaboni|-1.359|37.257|93
391|Kathiani Central|-1.411|37.308|54
392|Upper Kaewa/Iveti|-1.471|37.315|50
393|Lower Kaewa/Kaani|-1.480|37.350|81
@Machakos Town
398|Kalama|-1.602|37.318|112
399|Mua|-1.509|37.203|177
400|Mutituni|-1.424|37.251|48
401|Machakos Central|-1.508|37.281|41
402|Mumbuni North|-1.481|37.255|52
403|Muvuti/Kiima-Kimwe|-1.537|37.291|62
404|Kola|-1.670|37.324|107
@Masinga
371|Kivaa|-0.932|37.764|229
372|Masinga Central|-0.981|37.637|168
373|Ekalakala|-0.978|37.511|135
374|Muthesya|-0.965|37.407|90
375|Ndithini|-0.875|37.342|161
@Matungulu
385|Tala|-1.271|37.311|83
386|Matungulu North|-1.143|37.288|108
387|Matungulu East|-1.212|37.344|76
388|Matungulu West|-1.264|37.206|149
389|Kyeleni|-1.143|37.210|89
@Mavoko
394|Athi River|-1.454|36.947|85
395|Kinanie|-1.504|37.069|176
396|Muthwani|-1.364|37.078|171
397|Syokimau/Mulolongo|-1.364|36.935|51
@Mwala
405|Mbiuni|-1.239|37.417|117
406|Makutano/ Mwala|-1.347|37.473|110
407|Masii|-1.457|37.428|146
408|Muthetheni|-1.498|37.530|136
409|Wamunyu|-1.411|37.580|128
410|Kibauni|-1.543|37.670|120
@Yatta
376|Ndalani|-1.060|37.460|125
377|Matuu|-1.137|37.557|94
378|Kithimani|-1.168|37.456|145
379|Ikombe|-1.273|37.621|152
380|Katangi|-1.417|37.726|121
#Makueni
@Kaiti
420|Ukia|-1.759|37.513|146
421|Kee|-1.726|37.360|90
422|Kilungu|-1.787|37.373|80
423|Ilima|-1.827|37.429|106
@Kibwezi East
437|Masongaleni|-2.451|38.160|202
438|Mtito Andei|-2.704|38.293|416
439|Thange|-2.508|37.956|202
440|Ivingoni/Nzambani|-2.667|38.005|184
@Kibwezi West
431|Makindu|-2.246|37.781|249
432|Nguumo|-2.401|37.849|225
433|Kikumbulyu North|-2.262|38.020|136
434|Kikumbulyu South|-2.365|37.996|173
435|Nguu/Masumba|-2.071|37.628|146
436|Emali/Mulala|-2.032|37.505|92
@Kilome
417|Kasikeu|-1.951|37.364|183
418|Mukaa|-1.843|37.325|91
419|Kiima Kiu/Kalanzoni|-1.784|37.227|228
@Makueni
424|Wote|-1.799|37.594|105
425|Muvau/Kikuumini|-1.857|37.653|180
426|Mavindini|-1.854|37.811|153
427|Kitise/Kithuki|-2.026|37.875|173
428|Kathonzweni|-1.982|37.749|196
429|Nzaui/Kilili/Kalamba|-1.915|37.540|138
430|Mbitini|-1.970|37.453|89
@Mbooni
411|Tulimani|-1.578|37.409|89
412|Mbooni|-1.644|37.442|85
413|Kithungo/Kitundu|-1.688|37.478|90
414|Kisau/Kiteta|-1.605|37.524|150
415|Waia/Kako|-1.671|37.621|144
416|Kalawa|-1.687|37.754|149
#Mandera
@Banissa
196|Banissa|3.942|40.374|266
197|Derkhale|3.845|40.190|190
198|Guba|3.957|40.590|187
199|Malkamari|4.129|40.703|323
200|Kiliwehiri|3.971|40.157|204
@Lafey
216|Libehia|3.817|41.379|291
217|Fino|3.408|41.268|267
218|Lafey|3.179|41.206|239
219|Warankara|3.481|41.074|443
220|Alungo Gof|3.103|41.048|145
@Mandera East
211|Arabia|3.650|41.526|371
212|Bulla Mpya|3.866|41.778|152
213|Khalalio|3.922|41.659|149
214|Neboi|3.966|41.731|98
215|Township|3.949|41.858|65
@Mandera North
201|Ashabito|3.384|40.772|376
202|Guticha|3.592|40.580|423
203|Morothile|3.783|40.752|468
204|Rhamu|3.865|41.184|190
205|Rhamu-Dimtu|3.958|40.949|338
@Mandera South
206|Wargudud|3.083|40.818|274
207|Kutulo|2.569|40.780|519
208|Elwak South|2.793|40.929|128
209|Elwak North|2.721|40.747|672
210|Shimbir Fatuma|2.972|41.010|212
@Mandera West
191|Takaba South|3.203|40.325|424
192|Takaba|3.493|40.126|311
193|Lag Sure|3.621|40.219|243
194|Dandu|3.448|39.898|272
195|Gither|3.754|39.937|233
#Marsabit
@Laisamis
236|Loiyangalani|2.871|36.667|906
237|Kargi/South Horr|2.449|37.273|653
238|Korr/Ngurunit|2.087|37.470|513
239|Log Logo|1.969|38.108|760
240|Laisamis|1.602|37.905|583
@Moyale
221|Butiye|3.055|38.999|642
222|Sololo|3.554|38.683|111
223|Heilu-Manyatta|3.500|39.112|67
224|Golbo|3.236|39.211|367
225|Moyale Township|3.500|39.061|45
226|Uran|3.103|38.581|1180
227|Obbu|3.173|38.785|660
@North Horr
228|Illeret|4.112|36.314|610
229|North Horr|3.539|36.716|809
230|Dukana|4.037|37.096|727
231|Maikona|3.236|37.703|931
232|Turbi|2.585|38.452|1048
@Saku
233|Sagante/Jaldesa|2.333|38.063|327
234|Karare|2.235|37.875|259
235|Marsabit Central|2.450|37.900|282
#Meru
@Buuri
281|Timau|-0.015|37.226|184
282|Kisima|0.118|37.389|327
283|Kiirua/Naari|0.144|37.571|113
284|Ruiri/Rwarera|0.222|37.594|133
285|Kibirichia|0.050|37.477|306
@Central Imenti
286|Mwanganthia|-0.030|37.512|277
287|Abothuguchi Central|-0.024|37.739|130
288|Abothuguchi West|-0.069|37.836|173
289|Kiagu|0.050|37.477|306
@Igembe Central
256|Akirang'ondu|0.340|37.875|109
257|Athiru Ruujine|0.294|38.065|140
258|Igembe East|0.219|38.137|268
259|Njia|0.406|37.794|241
260|Kangeta|0.392|37.769|225
@Igembe North
261|Antuambui|0.468|37.886|202
262|Ntunene|0.397|37.858|149
263|Antubetwe Kiongo|0.346|38.067|129
264|Naathu|0.498|37.948|172
265|Amwathi|0.499|38.049|203
@Igembe South
251|Maua|0.236|37.954|35
252|Kiegoi/Antubochiu|0.224|37.928|51
253|Athiru Gaiti|0.085|38.217|333
254|Akachiu|0.141|37.951|105
255|Kanuni|0.074|38.119|271
@North Imenti
276|Municipality|0.087|37.623|68
277|Ntima East|0.033|37.676|50
278|Ntima West|0.033|37.634|81
279|Nyaki West|0.101|37.669|73
280|Nyaki East|0.053|37.737|81
@South Imenti
290|Mitunguu|-0.122|37.794|152
291|Igoji East|-0.173|37.697|80
292|Igoji West|-0.162|37.542|274
293|Abogeta East|-0.123|37.709|131
294|Abogeta West|-0.115|37.530|263
295|Nkuene|-0.071|37.542|290
@Tigania East
271|Thangatha|0.091|37.918|106
272|Mikinduri|0.084|37.854|71
273|Kiguchwa|0.187|37.871|73
274|Muthara|0.358|37.691|271
275|Karama|0.362|37.769|207
@Tigania West
266|Athwana|0.265|37.695|123
267|Akithii|0.204|37.734|155
268|Kianjai|0.223|37.644|237
269|Nkomo|0.128|37.741|76
270|Mbeu|0.068|37.796|55
#Migori
@Awendo
1265|North Sakwa|-0.795|34.504|117
1266|South Sakwa|-0.937|34.570|104
1267|West Sakwa|-0.831|34.501|75
1268|Central Sakwa|-0.858|34.533|82
@Kuria East
1296|Gokeharaka/Getambwega|-1.254|34.562|58
1297|Ntimaru West|-1.339|34.686|74
1298|Ntimaru East|-1.306|34.697|50
1299|Nyabasi East|-1.257|34.666|83
1300|Nyabasi West|-1.253|34.628|113
@Kuria West
1289|Bukira East|-1.190|34.612|73
1290|Bukira Centrl/Ikerege|-1.188|34.561|80
1291|Isibania|-1.231|34.479|28
1292|Makerero|-1.222|34.506|47
1293|Masaba|-1.130|34.544|86
1294|Tagare|-1.160|34.469|64
1295|Nyamosense/Komosoko|-1.178|34.425|79
@Nyatike
1282|Kachien'g|-0.820|34.067|168
1283|Kanyasa|-0.803|34.221|350
1284|North Kadem|-0.897|34.168|283
1285|Macalder/Kanyarwanda|-0.974|34.265|116
1286|Kaler|-1.068|34.236|63
1287|Got Kachola|-0.988|34.169|137
1288|Muhuru|-0.973|34.041|193
@Rongo
1261|North Kamagambo|-0.680|34.609|54
1262|Central Kamagambo|-0.752|34.604|48
1263|East Kamagambo|-0.727|34.570|120
1264|South Kamagambo|-0.874|34.604|128
@Suna East
1269|God Jope|-1.058|34.527|56
1270|Suna Central|-1.076|34.496|65
1271|Kakrao|-1.023|34.424|113
1272|Kwa|-1.094|34.597|73
@Suna West
1273|Wiga|-1.046|34.331|79
1274|Wasweta Ii|-1.093|34.408|70
1275|Ragana-Oruba|-1.088|34.465|61
1276|Wasimbete|-1.123|34.329|95
@Uriri
1277|West Kanyamkago|-0.948|34.396|107
1278|North Kanyamkago|-0.870|34.417|120
1279|Central Kanyamkago|-0.928|34.456|114
1280|South Kanyamkago|-0.980|34.515|92
1281|East Kanyamkago|-1.026|34.569|61
#Mombasa
@Changamwe
1|Port Reitz|-4.033|39.613|17
2|Kipevu|-4.026|39.622|10
3|Airport|-4.028|39.601|27
4|Changamwe|-4.014|39.621|27
5|Chaani|-4.034|39.631|23
@Jomvu
6|Jomvu Kuu|-3.983|39.596|40
7|Miritini|-4.013|39.582|30
8|Mikindani|-4.008|39.636|35
@Kisauni
9|Mjambere|-4.027|39.681|18
10|Junda|-4.008|39.674|39
11|Bamburi|-3.970|39.706|44
12|Mwakirunge|-3.954|39.666|68
13|Mtopanga|-3.993|39.689|17
14|Magogoni|-4.012|39.687|11
15|Shanzu|-3.978|39.731|46
@Likoni
21|Mtongwe|-4.079|39.613|56
22|Shika Adabu|-4.115|39.637|47
23|Bofu|-4.079|39.653|11
24|Likoni|-4.090|39.644|12
25|Timbwani|-4.096|39.658|27
@Mvita
26|Mji wa Kale/Makadara|-4.065|39.674|23
27|Tudor|-4.035|39.662|15
28|Tononoka|-4.046|39.668|13
29|Shimanzi/Ganjoni|-4.054|39.655|28
30|Majengo|-4.050|39.661|19
@Nyali
16|Frere Town|-4.027|39.688|12
17|Ziwa la Ng'ombe|-4.026|39.710|31
18|Mkomani|-4.050|39.697|25
19|Kongowea|-4.040|39.690|14
20|Kadzandani|-4.012|39.705|23
#Murang'a
@Gatanga
545|Ithanga|-0.985|37.345|104
546|Kakuzi/Mitubiri|-1.015|37.239|200
547|Mugumo-Ini|-0.977|37.031|108
548|Kihumbu-Ini|-0.916|36.974|78
549|Gatanga|-0.905|36.921|67
550|Kariara|-0.807|36.805|188
@Kandara
539|Ng'araria|-0.930|37.026|51
540|Muruka|-0.921|37.056|67
541|Kagundu-Ini|-0.900|37.071|112
542|Gaichanjiru|-0.867|37.057|141
543|Ithiru|-0.875|36.988|61
544|Ruchu|-0.826|36.922|84
@Kangema
516|Kanyenyaini|-0.688|36.831|160
517|Muguru|-0.681|37.016|122
518|Rwathia|-0.644|36.817|159
@Kigumo
528|Kahumbu|-0.854|37.083|79
529|Muthithi|-0.830|37.085|92
530|Kigumo|-0.805|36.988|55
531|Kangari|-0.771|36.833|142
532|Kinyona|-0.743|36.863|205
@Kiharu
522|Wangu|-0.712|37.025|81
523|Mugoiri|-0.752|37.033|82
524|Mbiri|-0.728|37.188|125
525|Township|-0.718|37.151|65
526|Murarandia|-0.727|36.924|99
527|Gaturi|-0.657|37.118|130
@Maragwa
533|Kimorori/Wempa|-0.943|37.166|96
534|Makuyu|-0.908|37.241|100
535|Kambiti|-0.800|37.216|97
536|Kamahuha|-0.834|37.174|79
537|Ichagaki|-0.802|37.122|117
538|Nginda|-0.781|37.081|92
@Mathioya
519|Gitugi|-0.649|37.000|159
520|Kiru|-0.601|36.837|215
521|Kamacharia|-0.597|37.008|67
#Nairobi
@Dagoretti North
1371|Kilimani|-1.284|36.784|43
1372|Kawangware|-1.281|36.747|13
1373|Gatina|-1.277|36.756|12
1374|Kileleshwa|-1.268|36.785|39
1375|Kabiro|-1.280|36.739|11
@Dagoretti South
1376|Mutuini|-1.292|36.699|30
1377|Ngando|-1.298|36.744|20
1378|Riruta|-1.286|36.735|23
1379|Uthiru/Ruthimitu|-1.269|36.706|32
1380|Waithaka|-1.284|36.715|22
@Embakasi Central
1416|Kayole North|-1.266|36.920|10
1417|Kayole Central|-1.274|36.915|9
1418|Kayole South|-1.282|36.912|9
1419|Komarock|-1.266|36.910|24
1420|Matopeni/Spring Valley|-1.259|36.931|10
@Embakasi East
1421|Upper Savannah|-1.293|36.896|17
1422|Lower Savannah|-1.285|36.907|9
1423|Embakasi|-1.322|36.935|65
1424|Utawala|-1.300|36.903|24
1425|Mihango|-1.278|36.949|49
@Embakasi North
1411|Kariobangi North|-1.252|36.881|10
1412|Dandora Area I|-1.255|36.888|11
1413|Dandora Area Ii|-1.248|36.898|11
1414|Dandora Area Iii|-1.243|36.905|8
1415|Dandora Area Iv|-1.239|36.912|22
@Embakasi South
1406|Imara Daima|-1.343|36.883|48
1407|Kwa Njenga|-1.321|36.882|13
1408|Kwa Reuben|-1.320|36.864|31
1409|Pipeline|-1.313|36.891|14
1410|Kware|-1.317|36.887|14
@Embakasi West
1426|Umoja I|-1.280|36.887|15
1427|Umoja Ii|-1.281|36.895|17
1428|Mowlem|-1.264|36.896|23
1429|Kariobangi South|-1.269|36.880|30
@Kamukunji
1434|Pumwani|-1.286|36.844|15
1435|Eastleigh North|-1.271|36.847|9
1436|Eastleigh South|-1.279|36.868|22
1437|Airbase|-1.270|36.862|23
1438|California|-1.282|36.848|7
@Kasarani
1396|Claycity|-1.217|36.915|25
1397|Mwiki|-1.233|36.963|51
1398|Kasarani|-1.228|36.899|37
1399|Njiru|-1.248|36.927|34
1400|Ruai|-1.256|37.036|111
@Kibra
1386|Laini Saba|-1.309|36.793|5
1387|Lindi|-1.313|36.792|11
1388|Makina|-1.307|36.783|9
1389|Woodley/Kenyatta Golf Course|-1.301|36.788|49
1390|Sarangombe|-1.310|36.776|15
@Langata
1381|Karen|-1.333|36.726|79
1382|Nairobi West|-1.318|36.814|27
1383|Mugumo-Ini|-1.370|36.850|155
1384|South-C|-1.320|36.832|21
1385|Nyayo Highrise|-1.311|36.808|17
@Makadara
1430|Makongeni|-1.294|36.852|21
1431|Maringo/Hamza|-1.289|36.871|23
1432|Harambee|-1.283|36.875|13
1433|Viwandani|-1.303|36.872|23
@Mathare
1445|Hospital|-1.260|36.848|14
1446|Mabatini|-1.261|36.859|11
1447|Huruma|-1.256|36.871|8
1448|Ngei|-1.256|36.870|30
1449|Mlango Kubwa|-1.263|36.846|6
1450|Kiamaiko|-1.255|36.876|10
@Roysambu
1391|Githurai|-1.200|36.907|13
1392|Kahawa West|-1.174|36.915|32
1393|Zimmerman|-1.201|36.880|39
1394|Roysambu|-1.223|36.862|48
1395|Kahawa|-1.189|36.906|19
@Ruaraka
1401|Baba Dogo|-1.241|36.879|16
1402|Utalii|-1.252|36.861|14
1403|Mathare North|-1.249|36.871|13
1404|Lucky Summer|-1.236|36.899|15
1405|Korogocho|-1.246|36.891|12
@Starehe
1439|Nairobi Central|-1.283|36.824|21
1440|Ngara|-1.272|36.825|16
1441|Ziwani/Kariokor|-1.280|36.837|8
1442|Pangani|-1.270|36.839|12
1443|Landimawe|-1.301|36.841|26
1444|Nairobi South|-1.311|36.839|16
@Westlands
1366|Kitisuru|-1.246|36.754|59
1367|Parklands/Highridge|-1.256|36.802|33
1368|Karura|-1.227|36.809|67
1369|Kangemi|-1.267|36.756|20
1370|Mountain View|-1.267|36.736|20
#Nakuru
@Bahati
865|Dundori|-0.240|36.200|55
866|Kabatini|-0.198|36.164|71
867|Kiamaina|-0.203|36.070|129
868|Lanet/Umoja|-0.291|36.177|74
869|Bahati|-0.153|36.157|78
@Gilgil
844|Gilgil|-0.485|36.319|134
845|Elementaita|-0.514|36.109|99
846|Mbaruk/Eburu|-0.520|36.208|247
847|Malewa West|-0.648|36.360|169
848|Murindati|-0.473|36.380|160
@Kuresoi North
853|Kiptororo|-0.340|35.508|129
854|Nyota|-0.351|35.636|126
855|Sirikwa|-0.266|35.674|86
856|Kamara|-0.134|35.668|106
@Kuresoi South
849|Amalo|-0.622|35.660|101
850|Keringet|-0.463|35.696|106
851|Kiptagich|-0.583|35.627|102
852|Tinet|-0.477|35.599|141
@Molo
826|Mariashoni|-0.415|35.799|184
827|Elburgon|-0.316|35.792|128
828|Turi|-0.291|35.738|83
829|Molo|-0.215|35.754|83
@Naivasha
836|Biashara (Naivasha)|-0.667|36.508|74
837|Hells Gate|-0.798|36.435|123
838|Lakeview|-0.725|36.422|48
839|Maai-Mahiu|-1.034|36.507|202
840|Maiella|-0.774|36.207|180
841|Olkaria|-0.893|36.375|230
842|Naivasha East|-0.791|36.518|130
843|Viwandani|-0.692|36.416|91
@Nakuru Town East
876|Biashara (Nakuru Town East)|-0.289|36.084|27
877|Kivumbini|-0.302|36.087|24
878|Flamingo|-0.306|36.076|11
879|Menengai|-0.281|36.123|51
880|Nakuru East|-0.379|36.121|145
@Nakuru Town West
870|Barut|-0.379|36.070|127
871|London|-0.267|36.072|38
872|Kaptembwo|-0.273|36.044|38
873|Kapkures|-0.317|36.023|50
874|Rhoda|-0.286|36.026|24
875|Shaabab|-0.303|36.057|26
@Njoro
830|Maunarok|-0.613|36.004|174
831|Mauche|-0.498|35.968|130
832|Kihingo|-0.464|36.046|92
833|Nessuit|-0.430|35.887|148
834|Lare|-0.414|36.007|84
835|Njoro|-0.344|35.936|129
@Rongai
860|Menengai West|-0.176|35.990|113
861|Soin|-0.039|35.981|171
862|Visoi|-0.158|35.871|126
863|Mosop|-0.266|35.923|160
864|Solai|0.077|36.161|221
@Subukia
857|Subukia|-0.012|36.208|88
858|Waseges|0.116|36.236|154
859|Kabazi|-0.091|36.140|154
#Nandi
@Aldai
755|Kabwareng|0.114|34.895|59
756|Terik|0.018|34.840|119
757|Kemeloi-Maraba|0.022|34.890|106
758|Kobujoi|0.046|34.969|72
759|Kaptumo-Kaboi|0.100|35.062|94
760|Koyo-Ndurio|0.023|35.045|75
@Chesumei
765|Chemundu/Kapng'etuny|0.240|35.078|58
766|Kosirai|0.280|35.139|85
767|Lelmokwo/Ngechek|0.353|35.177|97
768|Kaptel/Kamoiywo|0.307|35.046|119
769|Kiptuya|0.194|35.015|74
@Emgwen
770|Chepkumia|0.130|34.962|71
771|Kapkangani|0.203|34.958|58
772|Kapsabet|0.174|35.081|96
773|Kilibwoni|0.226|35.202|146
@Mosop
774|Chepterwai|0.534|34.930|94
775|Kipkaren|0.514|35.023|87
776|Kurgung/Surungai|0.457|34.973|90
777|Kabiyet|0.437|35.066|66
778|Ndalat|0.512|35.081|110
779|Kabisaga|0.433|35.126|113
780|Sangalo/Kebulonik|0.361|34.996|106
@Nandi Hills
761|Nandi Hills|0.115|35.166|77
762|Chepkunyuk|0.136|35.238|100
763|Ol'lessos|0.190|35.307|74
764|Kapchorua|0.090|35.326|95
@Tinderet
751|Songhor/Soba|-0.014|35.263|131
752|Tindiret|-0.031|35.369|106
753|Chemelil/Chemase|-0.007|35.098|189
754|Kapsimotwo|0.058|35.159|124
#Narok
@Emurua Dikirr
887|Ilkerin|-1.071|35.071|56
888|Ololmasani|-0.929|35.042|88
889|Mogondo|-1.027|35.059|96
890|Kapsasian|-0.981|35.126|85
@Kilgoris
881|Kilgoris Central|-0.997|34.930|227
882|Keyian|-1.030|34.693|166
883|Angata Barikoi|-1.344|34.790|202
884|Shankoe|-1.029|34.830|161
885|Kimintet|-1.250|34.978|401
886|Lolgorian|-1.161|34.750|168
@Narok East
897|Mosiro|-1.222|36.092|310
898|Ildamat|-1.083|36.009|383
899|Keekonyokie|-1.143|36.239|183
900|Suswa|-0.994|36.232|174
@Narok North
891|Olpusimoru|-0.614|35.692|251
892|Olokurto|-0.680|35.812|260
893|Narok Town|-1.118|35.829|152
894|Nkareta|-0.945|35.829|252
895|Olorropil|-0.765|35.960|249
896|Melili|-0.844|36.043|302
@Narok South
901|Majimoto/Naroosura|-1.418|35.825|494
902|Ololulung'a|-0.972|35.647|236
903|Melelo|-0.878|35.629|163
904|Loita|-1.861|35.850|372
905|Sogoo|-0.809|35.596|82
906|Sagamian|-0.710|35.502|149
@Narok West
907|Ilmotiok|-0.974|35.495|192
908|Mara|-1.171|35.267|422
909|Siana|-1.430|35.372|437
910|Naikarra|-1.675|35.566|459
#Nyamira
@Borabu
1362|Mekenene|-0.621|35.040|152
1363|Kiabonyoru|-0.589|34.988|75
1364|Nyansiongo|-0.757|35.005|80
1365|Esise|-0.805|35.036|97
@Kitutu Masaba
1346|Rigoma|-0.738|34.935|59
1347|Gachuba|-0.701|34.881|54
1348|Kemera|-0.669|34.829|60
1349|Magombo|-0.656|34.903|61
1350|Manga|-0.627|34.858|64
1351|Gesima|-0.696|34.971|74
@North Mugirango
1357|Itibo|-0.536|34.997|72
1358|Bomwagamo|-0.505|34.949|56
1359|Bokeira|-0.448|34.988|70
1360|Magwagwa|-0.468|35.021|60
1361|Ekerenyo|-0.523|35.026|32
@West Mugirango
1352|Nyamaiya|-0.503|34.908|61
1353|Bogichora|-0.581|34.920|145
1354|Bosamaro|-0.634|34.939|103
1355|Bonyamatuta|-0.608|34.959|63
1356|Township|-0.558|34.933|29
#Nyandarua
@Kinangop
441|Engineer|-0.618|36.549|94
442|Gathara|-0.619|36.637|142
443|North Kinangop|-0.517|36.622|116
444|Murungaru|-0.539|36.503|145
445|Njabini/Kiburu|-0.720|36.677|109
446|Nyakio|-0.772|36.626|59
447|Githabai|-0.726|36.575|130
448|Magumu|-0.846|36.579|86
@Kipipiri
449|Wanjohi|-0.300|36.513|135
450|Kipipiri|-0.398|36.464|139
451|Geta|-0.411|36.591|80
452|Githioro|-0.475|36.480|128
@Ndaragwa
462|Leshau Pondo|0.064|36.485|109
463|Kiriita|0.009|36.440|69
464|Central|-0.082|36.502|253
465|Shamata|-0.189|36.552|151
@Ol Jorok
458|Gathanji|-0.036|36.300|109
459|Gatimu|-0.015|36.378|80
460|Weru|-0.113|36.394|101
461|Charagita|-0.131|36.287|111
@Ol Kalou
453|Karau|-0.313|36.338|94
454|Kanjuiri Ridge|-0.295|36.269|118
455|Mirangine|-0.194|36.240|98
456|Kaimbaga|-0.333|36.398|142
457|Rurii|-0.208|36.378|121
#Nyeri
@Kieni
469|Mweiga|-0.361|36.790|235
470|Naromoru Kiamathaga|-0.156|37.114|227
471|Mwiyogo/Endarasha|-0.285|36.860|130
472|Mugunda|-0.180|36.750|225
473|Gatarakwa|-0.281|36.729|167
474|Thegu River|-0.271|37.059|326
475|Kabaru|-0.250|37.154|218
476|Gakawa|-0.081|37.106|248
@Mathira
477|Ruguru|-0.288|37.191|237
478|Magutu|-0.342|37.177|276
479|Iriaini|-0.416|37.180|126
480|Konyu|-0.514|37.124|61
481|Kirimukuyu|-0.464|37.077|78
482|Karatina Town|-0.445|37.111|62
@Mukurweini
487|Gikondi|-0.592|37.062|102
488|Rugi|-0.592|37.112|78
489|Mukurwe-Ini West|-0.537|37.021|66
490|Mukurwe-Ini Central|-0.561|37.106|112
@Nyeri Town
491|Kiganjo/Mathari|-0.391|36.965|111
492|Rware|-0.415|36.952|35
493|Gatitu/Muruguru|-0.441|37.010|65
494|Ruring'u|-0.444|36.966|40
495|Kamakwa/Mukaro|-0.435|36.918|62
@Othaya
483|Mahiga|-0.511|36.800|207
484|Iria-Ini|-0.541|36.832|192
485|Chinga|-0.573|36.830|176
486|Karima|-0.536|36.972|50
@Tetu
466|Dedan Kimanthi|-0.437|36.777|187
467|Wamagana|-0.480|36.871|192
468|Aguthi/Gaaki|-0.490|37.018|80
#Samburu
@Samburu East
672|Waso|1.018|37.724|619
673|Wamba West|0.856|37.192|459
674|Wamba East|1.032|37.417|374
675|Wamba North|1.350|37.211|425
@Samburu North
666|El-Barta|1.578|36.873|375
667|Nachola|1.685|36.595|524
668|Ndoto|1.746|37.122|383
669|Nyiro|2.138|36.777|448
670|Angata Nanyokie|1.310|36.724|234
671|Baawa|1.122|36.894|285
@Samburu West
661|Lodokejek|0.900|36.858|315
662|Suguta Marmar|0.910|36.579|217
663|Maralal|1.115|36.686|122
664|Loosuk|1.110|36.505|237
665|Poro|1.229|36.570|412
#Siaya
@Alego Usonga
1163|Usonga|0.070|34.099|94
1164|West Alego|0.118|34.170|80
1165|Central Alego|0.089|34.225|124
1166|Siaya Township|0.058|34.276|65
1167|North Alego|0.112|34.315|71
1168|South East Alego|0.017|34.296|167
@Bondo
1175|West Yimbo|-0.130|34.015|252
1176|Central Sakwa|-0.232|34.094|209
1177|South Sakwa|-0.227|34.217|148
1178|Yimbo East|-0.023|34.122|121
1179|West Sakwa|-0.078|34.209|143
1180|North Sakwa|-0.084|34.308|94
@Gem
1169|North Gem|0.123|34.416|86
1170|West Gem|0.038|34.411|85
1171|Central Gem|0.077|34.470|69
1172|Yala Township|0.107|34.530|46
1173|East Gem|0.037|34.519|77
1174|South Gem|-0.020|34.438|98
@Rarieda
1181|East Asembo|-0.158|34.412|180
1182|West Asembo|-0.165|34.351|216
1183|North Uyoma|-0.270|34.382|154
1184|South Uyoma|-0.358|34.322|96
1185|West Uyoma|-0.280|34.280|122
@Ugenya
1156|West Ugenya|0.213|34.145|112
1157|Ukwala|0.203|34.202|68
1158|North Ugenya|0.270|34.230|92
1159|East Ugenya|0.274|34.315|96
@Ugunja
1160|Sidindi|0.172|34.388|99
1161|Sigomere|0.223|34.360|86
1162|Ugunja|0.195|34.280|92
#Taita-Taveta
@Mwatate
120|Rong'e|-3.417|38.443|129
121|Mwatate|-3.586|38.461|167
122|Bura|-3.581|38.221|276
123|Chawia|-3.857|38.363|470
124|Wusi/Kishamba|-3.440|38.365|50
@Taveta
111|Chala|-3.221|37.979|425
112|Mahoo|-3.361|37.698|70
113|Bomeni|-3.389|37.681|20
114|Mboghoni|-3.459|37.664|135
115|Mata|-3.610|37.974|444
@Voi
125|Mbololo|-3.224|38.871|526
126|Sagalla|-3.532|38.785|478
127|Kaloleni|-3.432|38.575|106
128|Marungu|-3.739|38.872|274
129|Kasigau|-3.894|38.685|399
130|Ngolia|-2.983|38.262|559
@Wundanyi
116|Wundanyi/Mbale|-3.388|38.379|65
117|Werugha|-3.359|38.326|59
118|Wumingu/Kishushe|-3.244|38.295|209
119|Mwanda/Mgange|-3.354|38.229|148
#Tana River
@Bura
96|Chewele|-0.864|39.697|522
97|Bura|-0.651|39.301|1053
98|Bangale|-0.416|38.933|785
99|Sala|-0.579|39.572|316
100|Madogo|-0.271|39.307|527
@Galole
92|Kinakomba|-1.739|40.021|293
93|Mikinduni|-1.589|39.924|275
94|Chewani|-1.360|40.009|228
95|Wayu|-1.467|39.387|716
@Garsen
86|Kipini East|-2.487|40.528|241
87|Garsen South|-2.424|40.090|241
88|Kipini West|-2.551|40.265|231
89|Garsen Central|-2.326|40.207|148
90|Garsen West|-2.366|39.318|1004
91|Garsen North|-2.008|40.000|395
#Tharaka-Nithi
@Chuka/Igambang'ombe
301|Mariani|-0.344|37.747|92
302|Karingani|-0.228|37.454|319
303|Magumoni|-0.323|37.552|350
304|Mugwe|-0.326|37.611|410
305|Igambang'ombe|-0.372|37.807|155
@Maara
296|Mitheru|-0.195|37.401|458
297|Muthambi|-0.264|37.642|414
298|Mwimbi|-0.225|37.769|136
299|Ganga|-0.254|37.714|84
300|Chogoria|-0.210|37.535|276
@Tharaka
306|Gatunga|-0.127|38.127|228
307|Mukothima|0.002|38.052|190
308|Nkondi|-0.046|37.967|113
309|Chiakariga|-0.286|37.903|187
310|Marimanti|-0.174|37.948|131
#Trans Nzoia
@Cherangany
694|Sinyerere|1.129|35.129|92
695|Makutano|1.103|35.173|121
696|Kaplamai|0.981|35.106|97
697|Motosiet|0.973|35.174|97
698|Cherangany/Suwerwa|1.034|35.238|104
699|Chepsiro/Kiptoror|0.972|35.305|92
700|Sitatunga|1.070|35.096|82
@Endebess
680|Chepchoina|1.189|34.786|183
681|Endebess|1.057|34.794|168
682|Matumbei|1.117|34.726|205
@Kiminini
688|Kiminini|0.898|34.937|114
689|Waitaluk|0.935|35.033|112
690|Sirende|0.968|35.076|103
691|Hospital|1.022|35.037|55
692|Sikhendu|0.860|34.845|82
693|Nabiswa|0.926|34.912|77
@Kwanza
676|Kapomboi|1.139|35.034|104
677|Kwanza|1.221|34.961|105
678|Keiyo|1.221|34.961|105
679|Bidii|1.055|35.015|46
@Saboti
683|Kinyoro|1.003|34.841|195
684|Matisi|1.006|34.978|65
685|Tuwani|1.032|34.990|19
686|Saboti|0.953|34.805|122
687|Machewa|0.893|34.819|78
#Turkana
@Loima
629|Kotaruk/Lobei|2.670|35.307|354
630|Turkwel|3.188|35.323|659
631|Loima|3.105|34.919|519
632|Lokiriama/Lorengippi|2.747|34.848|450
@Turkana Central
624|Kerio Delta|2.857|36.067|474
625|Kang'atotha|3.331|35.962|491
626|Kalokol|3.513|35.723|467
627|Lodwar Township|3.209|35.680|236
628|Kanamkemer|3.084|35.694|150
@Turkana East
638|Kapedo/Napeitom|1.503|36.184|803
639|Katilia|2.331|36.366|589
640|Lokori/Kochodin|1.872|36.142|955
@Turkana North
611|Kaeris|3.997|35.500|573
612|Lake Zone|4.235|35.821|724
613|Lapur|4.824|35.707|273
614|Kaaleng/Kaikor|4.613|35.261|628
615|Kibish|5.123|35.438|661
616|Nakalale|3.879|35.220|649
@Turkana South
633|Kaputir|2.171|35.392|367
634|Katilu|2.265|35.528|427
635|Lobokat|1.891|35.610|250
636|Kalapata|2.435|35.976|466
637|Lokichar|2.652|35.675|476
@Turkana West
617|Kakuma|3.616|34.911|175
618|Lopur|3.927|34.997|301
619|Letea|3.475|34.638|537
620|Songot|4.385|34.769|846
621|Kalobeyei|3.925|34.361|474
622|Lokichoggio|4.276|34.259|317
623|Nanaam|4.549|34.497|354
#Uasin Gishu
@Ainabkoi
719|Kapsoya|0.520|35.321|50
720|Kaptagat|0.428|35.422|163
721|Ainabkoi/Olare|0.205|35.501|179
@Kapseret
722|Simat/Kapseret|0.458|35.197|87
723|Kipkenyo|0.515|35.246|63
724|Ngeria|0.404|35.261|96
725|Megun|0.345|35.285|91
726|Langas|0.524|35.204|78
@Kesses
727|Racecourse|0.482|35.284|45
728|Cheptiret/Kipchamo|0.387|35.366|158
729|Tulwet/Chuiyat|0.272|35.327|111
730|Tarakwa|0.128|35.439|248
@Moiben
714|Tembelio|0.568|35.416|108
715|Sergoit|0.647|35.368|112
716|Karuna/Meibeki|0.826|35.439|159
717|Moiben|0.776|35.366|118
718|Kimumu|0.555|35.301|56
@Soy
701|Moi's Bridge|0.901|35.164|76
702|Kapkures|0.855|35.159|55
703|Ziwa|0.839|35.268|109
704|Segero/Barsombe|0.894|35.321|120
705|Kipsomba|0.781|35.186|99
706|Soy|0.720|35.243|121
707|Kuinet/Kapsuswa|0.612|35.290|104
@Turbo
708|Ngenyilel|0.588|34.950|122
709|Tapsagoi|0.601|35.070|80
710|Kamagut|0.598|35.155|91
711|Kiplombe|0.634|35.229|129
712|Kapsaos|0.564|35.230|40
713|Huruma|0.531|35.246|38
#Vihiga
@Emuhaya
1073|North East Bunyore|0.105|34.652|46
1074|Central Bunyore|0.089|34.611|60
1075|West Bunyore|0.081|34.579|59
@Hamisi
1061|Shiru|0.164|34.880|67
1062|Muhudu|0.174|34.849|72
1063|Shamakhokho|0.105|34.834|44
1064|Gisambai|0.060|34.768|52
1065|Banja|0.064|34.821|45
1066|Tambua|0.025|34.777|68
1067|Jepkoyai|0.027|34.737|38
@Luanda
1068|Luanda Township|0.035|34.596|26
1069|Wemilabi|0.060|34.639|50
1070|Mwibona|0.024|34.564|40
1071|Luanda South|-0.008|34.568|49
1072|Emabungo|0.027|34.627|48
@Sabatia
1055|Lyaduywa/Izava|0.101|34.719|54
1056|West Sabatia|0.135|34.726|53
1057|Chavakali|0.117|34.714|62
1058|North Maragoli|0.099|34.763|50
1059|Wodanga|0.109|34.794|36
1060|Busali|0.145|34.797|43
@Vihiga
1051|Lugaga-Wamuluma|0.073|34.699|57
1052|South Maragoli|0.009|34.691|50
1053|Central Maragoli|0.052|34.719|46
1054|Mungoma|0.030|34.665|53
#Wajir
@Eldas
180|Eldas|2.443|39.515|281
181|Della|2.417|39.702|330
182|Lakoley South/Basir|2.308|39.194|425
183|Elnur/Tula Tula|2.056|39.805|402
@Tarbaj
172|Elben|2.616|40.330|519
173|Sarman|2.446|40.018|268
174|Tarbaj|2.073|40.079|470
175|Wargadud|2.254|40.453|372
@Wajir East
168|Wagberi|1.778|40.077|69
169|Township|1.724|40.070|66
170|Barwago|1.753|40.022|53
171|Khorof/Harar|1.953|40.660|674
@Wajir North
161|Gurar|3.389|39.649|393
162|Bute|3.295|39.445|275
163|Korondile|2.707|39.156|587
164|Malkagufu|2.774|39.473|391
165|Batalu|2.826|39.964|410
166|Danaba|3.123|39.793|400
167|Godoma|3.299|39.368|295
@Wajir South
184|Benane|0.581|40.450|561
185|Burder|1.292|40.488|565
186|Dadaja Bulla|0.572|40.890|223
187|Habasswein|0.763|39.811|547
188|Lagboghol South|1.196|40.025|580
189|Ibrahim Ure|1.426|40.860|962
190|Diif|1.076|40.832|750
@Wajir West
176|Arbajahan|2.046|39.421|511
177|Hadado/Athibohol|1.616|39.491|583
178|Ademasajide|1.282|39.455|315
179|Wagalla/Ganyure|1.642|39.789|413
#West Pokot
@Kacheliba
651|Suam|1.460|34.904|210
652|Kodich|1.632|35.046|132
653|Kapckok|1.828|35.086|168
654|Kasei|1.986|35.264|236
655|Kiwawa|2.156|35.133|351
656|Alale|2.422|35.098|292
@Kapenguria
641|Riwo|1.550|35.212|380
642|Kapenguria|1.320|35.119|124
643|Mnagei|1.264|35.049|125
644|Siyoi|1.231|35.159|111
645|Endugh|1.743|35.258|256
646|Sook|1.592|35.308|139
@Pokot South
657|Chepareria|1.414|35.222|250
658|Batei|1.405|35.335|133
659|Lelan|1.160|35.338|238
660|Tapach|1.285|35.401|188
@Sigor
647|Sekerr|1.715|35.432|264
648|Masool|1.608|35.648|254
649|Lomut|1.385|35.593|173
650|Weiwei|1.442|35.474|250
`;
