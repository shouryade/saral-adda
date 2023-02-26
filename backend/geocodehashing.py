lat = 30.562477
long = 76.896965
restrict_loc=[]


def is_valid(lat,long):
    if lat<38 and lat>=8 and long<98 and long>=68:
        return True
    else:
        return False
    
def is_valid_text(encoded):
    encoded=encoded.replace(' ','').split('$')
    word=encoded[1]+encoded[2]
    for i in word:
        if i not in '23456789CFGHJMPQRVWX':
            return False
    return True

def index(element):
    if element in '23456789CFGHJMPQRVWX':
        index = '23456789CFGHJMPQRVWX'.index(element)
        return (index)  
    else:
        return False
    
def to_base20(decimal_num):
    # Define the custom set of characters
    custom_chars = '23456789CFGHJMPQRVWX'
    base20_num = ''
    if decimal_num==0:
        return '22'
    while decimal_num > 0:
        remainder = decimal_num % 20
        base20_num = custom_chars[remainder] + str(base20_num)
        decimal_num //= 20
    if len(base20_num)==1:
        return '2'+base20_num
    return base20_num

def to_base10(base20_num):
    custom_chars = '23456789CFGHJMPQRVWX'
    reversed_base20_num = base20_num[::-1]
    decimal_num = 0
    for i in range(len(reversed_base20_num)):
        digit = custom_chars.index(reversed_base20_num[i])
        decimal_num += digit * (20 ** i)
    return decimal_num

def encoder(lat,long,restrict_loc,floor=0,):
    if is_valid(lat,long):
        lat-=8
        long-=68
        encoder = '23456789CFGHJMPQRVWX'
        row1=int((lat)/2)
        col1=int((long)/2)
        row2=int(lat%2*(10))
        col2=int(long%2*(10))
        if (encoder[row1]+encoder[col1]+encoder[row2]+encoder[col2]) in restrict_loc:
            return False
        row3=int(((lat%2)%0.1)*(200))
        col3=int(((long%2)%0.1)*(200))
        row4=int((((lat%2)%0.1)%0.005)*(4000))
        col4=int((((long%2)%0.1))%0.005*(4000))
        row5=int((((((lat%2)%0.1))%0.005)%(0.00025))*16000)
        col5=int((((((long%2)%0.1))%0.005)%(0.00025))*20000)
        ele10=5*(row5)+col5
        ele_floor=to_base20(floor)
        return str(encoder[row1]+encoder[col1]+encoder[row2]+
                   encoder[col2]+' '+encoder[row3]+encoder[col3]+
                   encoder[row4]+encoder[col4]+' $ '+encoder[ele10]+ele_floor)
    
def decoder(encoded_word):
    if is_valid_text(encoded_word):
        dec=encoded_word.replace(' ','').split('$') 
        gridnumber=index(dec[2][0])
        latitude=index(dec[1][0])*2+8+index(dec[1][2])/10+index(dec[1][4])/200+index(dec[1][6])/4000+((gridnumber//5)/16000)
        longitude=index(dec[1][1])*2+68+index(dec[1][3])/10+(index(dec[1][5])/200)+(index(dec[1][7])/4000)+((gridnumber%5)/20000)    
        floor=to_base10(dec[2][1:])
        return(latitude,longitude,floor)
    return False

rto_codes = {
    'AP': 'Andhra Pradesh',
    'AR': 'Arunachal Pradesh',
    'AS': 'Assam',
    'BR': 'Bihar',
    'CG': 'Chhattisgarh',
    'CH': 'Chandigarh',
    'DD': 'Daman and Diu',
    'DL': 'Delhi',
    'GA': 'Goa',
    'GJ': 'Gujarat',
    'HR': 'Haryana',
    'HP': 'Himachal Pradesh',
    'JH': 'Jharkhand',
    'JK': 'Jammu and Kashmir',
    'KA': 'Karnataka',
    'KL': 'Kerala',
    'LD': 'Lakshadweep',
    'MH': 'Maharashtra',
    'ML': 'Meghalaya',
    'MN': 'Manipur',
    'MP': 'Madhya Pradesh',
    'MZ': 'Mizoram',
    'NL': 'Nagaland',
    'OD': 'Odisha',
    'PB': 'Punjab',
    'PY': 'Puducherry',
    'RJ': 'Rajasthan',
    'SK': 'Sikkim',
    'TN': 'Tamil Nadu',
    'TR': 'Tripura',
    'TS': 'Telangana',
    'UK': 'Uttarakhand',
    'UP': 'Uttar Pradesh',
    'WB': 'West Bengal'
}
rto_codes_reversed = {value: key for key, value in rto_codes.items()}
# import geocoder

def written_format(lat,long,restrict_loc=[],floor=0,):
    location = geocoder.osm([lat, long], method='reverse')
    state = location.state
    state = rto_codes_reversed[state] + ' $ ' + encoder(lat,long,restrict_loc,floor)
    return state