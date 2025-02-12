"use client";
import React, { useState } from "react";
import { Check, Filter } from "lucide-react";
import {
  Drawer,
  IconButton,
  Typography,
  Slider,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";
const FiltersSidebar = ({ minPrice = 0, maxPrice = 100000 }) => {
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const Categories = ["Loose tea", "Oolong"];
  const size = ["s", "m", "l", "xl"];
  const color = ["White", "Black"];

  const handleTagClick = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <div className="z-50">
      {/* ✅ Mobile Toggle Button */}
      <span className="hidden md:hidden">
        <Button
          variant="outlined"
          startIcon={<Filter />}
          onClick={() => setOpenFilters(true)}
          // className="md:hidden w-full text-gray-800 border-gray-300"
          className="w-full text-gray-800 border-gray-300"
        >
          Filters
        </Button>
      </span>

      {/* ✅ MUI Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={openFilters}
        onClose={() => setOpenFilters(false)}
      >
        <Paper className="w-72 h-min p-5 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Typography variant="h6" className="font-semibold ">
              Filters
            </Typography>
            <IconButton onClick={() => setOpenFilters(false)}>
              <IoMdClose />
            </IconButton>
          </div>

          {/* ✅ Categories */}
          <Typography variant="subtitle1" className="font-semibold mt-6">
            Categories
          </Typography>
          <hr className="mt-1" />
          <FormControl component="fieldset">
            <FormGroup>
              {Categories.map((tag) => (
                <FormControlLabel
                  key={tag}
                  control={
                    <Checkbox
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagClick(tag)}
                    />
                  }
                  label={tag}
                  className="capitalize text-sm"
                />
              ))}
            </FormGroup>
          </FormControl>

          {/* ✅ size */}
          <Typography variant="subtitle1" className="font-semibold mt-1">
            Size
          </Typography>
          <hr className="mt-1" />
          <FormControl component="fieldset">
            <FormGroup>
              {size.map((tag) => (
                <FormControlLabel
                  key={tag}
                  control={
                    <Checkbox
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagClick(tag)}
                    />
                  }
                  label={tag}
                  className="capitalize text-sm"
                />
              ))}
            </FormGroup>
          </FormControl>

          {/* ✅ color */}
          <Typography variant="subtitle1" className="font-semibold mt-1">
            Color
          </Typography>
          <hr className="mt-1" />
          <FormControl component="fieldset">
            <FormGroup>
              {color.map((tag) => (
                <FormControlLabel
                  key={tag}
                  control={
                    <Checkbox
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagClick(tag)}
                    />
                  }
                  label={tag}
                  className="capitalize text-sm"
                />
              ))}
            </FormGroup>
          </FormControl>

          <Typography variant="subtitle1" className="font-semibold mt-2">
            Availability
          </Typography>
          <hr className="mb-1" />
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                key={"In Stock"}
                control={
                  <Checkbox
                    checked={selectedTags.includes("In Stock")}
                    onChange={() => handleTagClick("In Stock")}
                  />
                }
                label={"In Stock"}
                className="capitalize text-sm"
              />
            </FormGroup>
          </FormControl>

          {/* ✅ Price Range */}
          <Typography variant="subtitle1" className="font-semibold mt-2">
            Price Range
          </Typography>
          <hr className="" />
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
            sx={{
              color: "#f59e0b", // Tailwind yellow-500
              "& .MuiSlider-thumb": {
                bgcolor: "#fff",
                border: "2px solid #f43f5e", // Tailwind rose-500
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              },
            }}
          />
          <Typography className="text-gray-600 mt-2 text-sm">
            ₹{priceRange[0].toLocaleString()} - ₹
            {priceRange[1].toLocaleString()}
          </Typography>

          {/* ✅ Apply Button */}
          <hr className="my-3" />
          <Button
            variant="contained"
            fullWidth
            className="bg-indigo-600 text-white mt-4"
            onClick={() => setOpenFilters(false)}
          >
            Apply Filters
          </Button>
        </Paper>
      </Drawer>

      {/* ✅ Desktop Sidebar */}
      <Paper className="hidden md:block p-5 w-60 border border-gray-200 rounded-lg">
        <Typography variant="h6" className="font-semibold mb-6 text-center ">
          Filters
        </Typography>

        {/* ✅ Categories */}
        <Typography
          variant="subtitle1"
          className="font-semibold mb-0 space-y-0"
        >
          Categories
        </Typography>
        <hr className="mb-1" />
        <FormControl component="fieldset">
          <FormGroup>
            {Categories.map((tag) => (
              <FormControlLabel
                key={tag}
                control={
                  <Checkbox
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagClick(tag)}
                  />
                }
                label={tag}
                className="capitalize text-sm"
              />
            ))}
          </FormGroup>
        </FormControl>

        {/* ✅ Tags */}
        <Typography variant="subtitle1" className="font-semibold mt-2">
          Size
        </Typography>
        <hr className="mb-1" />
        <FormControl component="fieldset">
          <FormGroup>
            {size.map((tag) => (
              <FormControlLabel
                key={tag}
                control={
                  <Checkbox
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagClick(tag)}
                  />
                }
                label={tag}
                className="capitalize text-sm"
              />
            ))}
          </FormGroup>
        </FormControl>

        {/* ✅ color */}
        <Typography variant="subtitle1" className="font-semibold mt-2">
          Color
        </Typography>
        <hr className="mb-1" />
        <FormControl component="fieldset">
          <FormGroup>
            {color.map((tag) => (
              <FormControlLabel
                key={tag}
                control={
                  <Checkbox
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleTagClick(tag)}
                  />
                }
                label={tag}
                className="capitalize text-sm"
              />
            ))}
          </FormGroup>
        </FormControl>

        {/* ✅ In Stock */}
        <Typography variant="subtitle1" className="font-semibold mt-2">
          Availability
        </Typography>
        <hr className="mb-1" />
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              key={"In Stock"}
              control={
                <Checkbox
                  checked={selectedTags.includes("In Stock")}
                  onChange={() => handleTagClick("In Stock")}
                />
              }
              label={"In Stock"}
              className="capitalize text-sm"
            />
          </FormGroup>
        </FormControl>

        {/* ✅ Price Range */}
        <hr className="my-1" />
        <Typography variant="subtitle1" className="font-semibold mt-2">
          Price Range
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={minPrice}
          max={maxPrice}
          sx={{
            color: "#f59e0b",
            "& .MuiSlider-thumb": {
              bgcolor: "#fff",
              border: "2px solid #f43f5e",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            },
          }}
        />
        <Typography className="text-gray-600 mt-2 text-sm">
          ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
        </Typography>

        <hr className="my-1" />

        {/* ✅ Apply Button */}
        <Button
          variant="contained"
          fullWidth
          className="bg-indigo-600 text-white mt-4"
        >
          Apply Filters
        </Button>
      </Paper>
    </div>
  );
};

export default FiltersSidebar;
