import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";
import { COLOR } from "../../../../themes/StyleGuides";
import { Icon } from "../../../../assest";

interface DropdownFieldProps {
    label: string;
    recommended: string[];
    all: string[];
    onSelect?: (value: string) => void;
}

const DropdownTimezone: React.FC<DropdownFieldProps> = ({
    label,
    recommended,
    all,
    onSelect,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string>("GMT-04:00 America/New_York (EDT)");
    const [search, setSearch] = useState<string>("");

    const handleSelect = (value: string) => {
        setSelected(value);
        setIsOpen(false);
        if (onSelect) onSelect(value);
    };

    const filteredRecommended = recommended.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase())
    );

    const filteredAll = all.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {/* Dropdown */}
            <TouchableOpacity
                style={[styles.dropdown,isOpen && styles.whenOpen]}
                onPress={() => setIsOpen(!isOpen)}>
                <Text style={styles.selectedText}>{selected}</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>

            {/* Dropdown Options */}
            {isOpen && (
                <View style={styles.dropdownContainer}>

                    {/* Search Bar */}
                    <View style={styles.searchContainer}>
                        <Image
                            source={Icon.search}
                            style={styles.searchIcon}
                        />
                        <TextInput
                            placeholder="Search Timezone"
                            placeholderTextColor={COLOR.lightBlack}
                            style={styles.searchInput}
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>

                    {/* Recommended Timezones */}
                    <ScrollView nestedScrollEnabled style={styles.listContainer}>
                        <Text style={styles.sectionHeader}>Recommended Timezones</Text>
                        {filteredRecommended.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.option}
                                onPress={() => handleSelect(item)}
                            >
                                <Text style={styles.optionText}>{item}</Text>
                            </TouchableOpacity>
                        ))}

                        {/* All Timezones */}
                        <Text style={styles.sectionHeader}>All Timezones</Text>
                        {filteredAll.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.option}
                                onPress={() => handleSelect(item)}
                            >
                                <Text style={styles.optionText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 10,
        position: 'absolute',
        zIndex: 1,
        width:"95%"
    },
    dropdown: {
        borderRadius: 15,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLOR.white,
    },
    label: {
        marginBottom: 5,
        color: COLOR.lightBlack,
        fontWeight: '900',
        zIndex: 1
    },
    selectedText: {
        fontSize: 14,
        color: COLOR.lightBlack,
    },
    chosenTimezone: {
        fontSize: 14,
        color: COLOR.lightBlack,
        margin: 10,
    },
    whenOpen: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    dropdownIcon: {
        fontSize: 12,
        color: COLOR.lightBlack,
    },
    dropdownContainer: {
        backgroundColor: COLOR.white,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLOR.gray_4,
        borderRadius: 15,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 5,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
        marginLeft: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: COLOR.lightBlack,
    },
    listContainer: {
        paddingHorizontal: 10,
        maxHeight: 300,
        overflow: 'scroll'
    },
    sectionHeader: {
        fontSize: 14,
        fontWeight: "900",
        color: COLOR.perpal,
        marginTop: 10,
        marginBottom: 5,
        marginVertical: 10,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: COLOR.gray_4,
        padding: 10
    },
    option: {
        paddingVertical: 8,
        paddingHorizontal: 20
    },
    optionText: {
        fontSize: 14,
        color: COLOR.lightBlack,
    },
});

export default DropdownTimezone;
